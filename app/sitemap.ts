import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jworra.com'
  
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/music/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour/`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dialogxe/`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
