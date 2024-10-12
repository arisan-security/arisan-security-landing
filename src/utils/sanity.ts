import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-08-31',      
  useCdn: true,                                         // Use the CDN for faster reads
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN       // API token with write permissions
});