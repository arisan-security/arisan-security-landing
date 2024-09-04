// pages/api/blogger.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface BloggerPost {
  // Define the structure of the expected response from Blogger API.
  // This is just an example. Adjust based on your data requirements.
  feed: {
    entry: any[]; // Adjust this type as needed based on your response structure
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BloggerPost | { error: string }>
): Promise<void> {
  try {
    const response = await fetch(`https://www.blogger.com/feeds/2512754821872241729/posts/default?alt=json`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from Blogger API');
    }

    const data: BloggerPost = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Blogger API" });
  }
}