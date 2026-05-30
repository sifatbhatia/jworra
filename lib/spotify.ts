const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const ARTIST_ID = '4q0N3EI67tVnAeeaXbNQIj';
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyAlbum {
  id: string;
  name: string;
  images: Array<{ url: string; height: number; width: number }>;
  release_date: string;
  album_type: string;
  total_tracks: number;
  external_urls: {
    spotify: string;
  };
  artists: Array<{
    name: string;
  }>;
}

interface SpotifyArtistAlbumsResponse {
  items: SpotifyAlbum[];
  total: number;
  limit: number;
  offset: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, options?: RequestInit, retries = MAX_RETRIES): Promise<Response> {
  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      lastError = new Error(`Spotify API returned ${response.status} ${response.statusText}`);
      console.error(`[Spotify] Attempt ${attempt}/${retries} failed: ${response.status} ${response.statusText}`);
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
      console.error(`[Spotify] Attempt ${attempt}/${retries} failed:`, e instanceof Error ? e.message : e);
    }
    if (attempt < retries) {
      console.error(`[Spotify] Retrying in ${RETRY_DELAY_MS / 1000}s...`);
      await sleep(RETRY_DELAY_MS);
    }
  }
  throw lastError || new Error('Spotify fetch failed after max retries');
}

async function getAccessTokenWithRetry(): Promise<string | null> {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!client_id || !client_secret) {
    return null;
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetchWithRetry(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data: SpotifyToken = await response.json();
  return data.access_token;
}

export async function getArtistAlbums(limit = 50) {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    if (!client_id || !client_secret) {
      return [];
    }

    const access_token = await getAccessTokenWithRetry();
    if (!access_token) {
      return [];
    }

    const response = await fetchWithRetry(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&market=US&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 3600 }
      }
    );

    const data: SpotifyArtistAlbumsResponse = await response.json();
    return data.items.sort((a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  } catch (e) {
    console.error('[Spotify] getArtistAlbums failed, returning empty:', e instanceof Error ? e.message : e);
    return [];
  }
}

export const ARTIST_URL = `https://api.spotify.com/v1/artists/${ARTIST_ID}`;

export function formatReleaseDate(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  if (!month && !day) return year;
  if (!day) return new Date(`${dateStr}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function getAlbumTypeLabel(albumType: string): string {
  switch (albumType) {
    case 'album': return 'Album';
    case 'single': return 'Single';
    case 'compilation': return 'Compilation';
    default: return albumType.charAt(0).toUpperCase() + albumType.slice(1);
  }
}

export async function getArtistTopTracks() {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    if (!client_id || !client_secret) {
      return [];
    }

    const access_token = await getAccessTokenWithRetry();
    if (!access_token) {
      return [];
    }

    const response = await fetchWithRetry(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 3600 }
      }
    );

    const data = await response.json();
    return data.tracks;
  } catch (e) {
    console.error('[Spotify] getArtistTopTracks failed, returning empty:', e instanceof Error ? e.message : e);
    return [];
  }
}
