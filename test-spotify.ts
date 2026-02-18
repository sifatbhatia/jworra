
import dotenv from 'dotenv';
import path from 'path';

// Load env vars explicitly
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

console.log('Checking Spotify Credentials...');
console.log('Client ID present:', !!client_id);
console.log('Client Secret present:', !!client_secret);

if (!client_id || !client_secret) {
    console.error('❌ Missing credentials in .env file');
    process.exit(1);
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function testConnection() {
    try {
        console.log('Attempting to fetch token...');
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
            const text = await response.text();
            console.error(`❌ Token fetch failed: ${response.status} ${response.statusText}`);
            console.error('Response:', text);
            return;
        }

        const data = await response.json();
        console.log('✅ Access Token retrieved successfully!');

        // Test verifying artist albums
        const ARTIST_ID = '4q0N3EI67tVnAeeaXbNQIj';
        console.log(`Fetching albums for artist: ${ARTIST_ID}...`);

        const albumsResponse = await fetch(
            `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?limit=5`,
            {
                headers: {
                    Authorization: `Bearer ${data.access_token}`,
                },
            }
        );

        if (!albumsResponse.ok) {
            console.error(`❌ Album fetch failed: ${albumsResponse.status}`);
            return;
        }

        const albumsData = await albumsResponse.json();
        console.log(`✅ Successfully fetched ${albumsData.items.length} albums.`);
        if (albumsData.items.length > 0) {
            console.log('Sample Album:', albumsData.items[0].name);
        } else {
            console.warn('⚠️ No albums found (array is empty).');
        }

    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

testConnection();
