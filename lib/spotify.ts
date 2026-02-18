const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
// Note: In Next.js static export ('output: export'), these env vars are evaluated at BUILD TIME.
// Ensure they are present in your Netlify build settings.

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const ARTIST_ID = '4q0N3EI67tVnAeeaXbNQIj'; // J. Worra's Spotify Artist ID

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

async function getAccessToken(): Promise<string> {
  if (!client_id || !client_secret) {
    console.error('Missing Spotify Client ID or Secret');
    throw new Error('Missing Spotify credentials');
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    // cache: 'no-store', // Removed to allow static build to proceed without dynamic error
  });

  if (!response.ok) {
    throw new Error('Failed to get Spotify access token');
  }

  const data: SpotifyToken = await response.json();
  return data.access_token;
}

export async function getArtistAlbums(limit = 50) {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&market=US&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        // For static export, data is fetched at build time.
        // We can use partial revalidation if we were using ISR, but for export it just runs once.
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      console.error(`[Build] Spotify API Error: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch artist albums');
    }

    const data: SpotifyArtistAlbumsResponse = await response.json();

    // Explicitly sort by release date descending
    return data.items.sort((a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  } catch (error) {
    console.error('[Build] Error fetching Spotify data:', error);
    return [];
  }
}

export async function getArtistTopTracks() {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch top tracks');
    }

    const data = await response.json();
    return data.tracks;
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return [];
  }
}

export function formatReleaseDate(dateString: string): string {
  const date = new Date(dateString);
  return date.getFullYear().toString();
}

export function getAlbumTypeLabel(type: string): string {
  switch (type) {
    case 'album':
      return 'Album';
    case 'single':
      return 'Single';
    case 'compilation':
      return 'Compilation';
    default:
      return 'Release';
  }
}
