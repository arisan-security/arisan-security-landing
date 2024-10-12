import type { NextApiRequest, NextApiResponse } from 'next';
import "@/utils/cron";  // Ensure cron gets triggered

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Cron job initialized" });
}