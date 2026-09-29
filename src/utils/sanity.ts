import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-08-31',      
  useCdn: true,                                         // Use the CDN for faster reads
  perspective: 'published',                             // Drafts (e.g. unfinished Studio edits) must never reach the site
});