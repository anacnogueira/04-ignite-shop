import { NextApiRequest, NextApiResponse } from "next";

export default function handler(res: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: "Hello World" });
}
