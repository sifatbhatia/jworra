interface BandsintownEvent {
  id: string;
  artist: {
    name: string;
    image_url: string;
    url: string;
    mbid?: string;
    facebook_page_url?: string;
    tracker_count?: number;
  };
  venue: {
    name: string;
    location: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    region?: string;
  };
  datetime: string;
  description?: string;
  lineup?: string[];
  url: string;
  offers?: Array<{
    type: string;
    url: string;
    status: string;
    start_date?: string;
    end_date?: string;
  }>;
  on_sale_datetime?: string;
  facebook_rsvp_url?: string;
}

interface TourEvent {
  id: string;
  artist: string;
  venue: string;
  location: string;
  date: string;
  url: string;
  offers?: Array<{
    type: string;
    url: string;
    status: string;
  }>;
}

const BANDSINTOWN_API_BASE = 'https://rest.bandsintown.com';

// Function to get artist events from Bandsintown API
export async function getArtistEvents(artistName: string = 'J Worra', limit: number = 10): Promise<TourEvent[]> {
  try {
    // Get app ID from environment variables
    const appId = process.env.BANDSINTOWN_APP_ID || 'your_app_id_here';
    
    if (appId === 'your_app_id_here') {
      console.warn('Bandsintown app ID not configured. Using mock data.');
      // Return mock data for development
      return [
        {
          id: "1",
          artist: "J. Worra",
          venue: "Elrow NYC",
          location: "Brooklyn, NY",
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          url: "https://www.bandsintown.com/t/123456",
          offers: [
            {
              type: "Tickets",
              url: "https://www.residentadvisor.net/events/123456",
              status: "available"
            }
          ]
        },
        {
          id: "2",
          artist: "J. Worra",
          venue: "Exchange LA",
          location: "Los Angeles, CA", 
          date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          url: "https://www.bandsintown.com/t/123457",
          offers: [
            {
              type: "Tickets",
              url: "https://www.residentadvisor.net/events/123457",
              status: "available"
            }
          ]
        },
        {
          id: "3",
          artist: "J. Worra",
          venue: "Electric Pickle",
          location: "Miami, FL",
          date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
          url: "https://www.bandsintown.com/t/123458",
          offers: [
            {
              type: "Tickets",
              url: "https://www.residentadvisor.net/events/123458",
              status: "available"
            }
          ]
        }
      ];
    }

    const response = await fetch(
      `${BANDSINTOWN_API_BASE}/artists/${encodeURIComponent(artistName)}/events?app_id=${appId}&date=all&per_page=${limit}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: {
          revalidate: 3600, // Revalidate every hour
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Bandsintown API error: ${response.status}`);
    }

    const events: BandsintownEvent[] = await response.json();

    // Transform the data to our TourEvent format
    return events.map(event => ({
      id: event.id,
      artist: event.artist.name,
      venue: event.venue.name,
      location: event.venue.location,
      date: event.datetime,
      url: event.url,
      offers: event.offers
    }));
  } catch (error) {
    console.error('Error fetching Bandsintown events:', error);
    return [];
  }
}

// Function to get artist info
export async function getArtistInfo(artistName: string = 'J Worra') {
  try {
    const appId = process.env.BANDSINTOWN_APP_ID || 'your_app_id_here';
    
    if (appId === 'your_app_id_here') {
      return null;
    }

    const response = await fetch(
      `${BANDSINTOWN_API_BASE}/artists/${encodeURIComponent(artistName)}?app_id=${appId}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: {
          revalidate: 86400, // Revalidate daily
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Bandsintown API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching artist info:', error);
    return null;
  }
}

// Helper function to format event date
export function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

// Helper function to format event time
export function formatEventTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}