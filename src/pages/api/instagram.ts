// pages/api/instagramPosts.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/sanity"; // Sanity client

interface User {
  userId?: string;
  fullName?: string;
  username?: string;
  profilePicUrl?: string;
}

interface Image {
  url: string;
  width: number;
  height: number;
}

interface InstagramPost {
  _id: string;
  postId: string;
  caption: string;
  createdAt: string;
  user: User;
  hashtags?: string[];
  images?: Image[];
  thumbnailUrl?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = '*[_type == "instagramPost"]{_id, postId, caption, createdAt, user{userId, fullName, username, profilePicUrl}, hashtags, images[]{url, width, height}, thumbnailUrl}';
    const posts: InstagramPost[] = await client.fetch(query);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}