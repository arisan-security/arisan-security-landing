import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/sanity";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = '*[_type == "featuredEvent"] | order(_createdAt desc)[0]{title, description, link, "imageUrl": image.asset->url}';
    const event = await client.fetch(query);
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching featured event:", error);
    res.status(500).json({ error: "Failed to fetch featured event" });
  }
}
