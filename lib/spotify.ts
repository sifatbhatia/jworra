const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

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
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
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
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch artist albums');
    }

    const data: SpotifyArtistAlbumsResponse = await response.json();
    
    // Explicitly sort by release date descending
    return data.items.sort((a, b) => 
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
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
