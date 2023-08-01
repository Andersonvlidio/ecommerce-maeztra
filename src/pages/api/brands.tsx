import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;

    if (method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
    }

    res.status(200).json([
      {
        id: 1,
        name: "Comma",
        image: "/comma.svg",
        method,
      },
      {
        id: 2,
        name: "Melissa",
        image: "/melissa.svg",
        method,
      },
      {
        id: 3,
        name: "Forever 21",
        image: "/forever.svg",
        method,
      },
      {
        id: 4,
        name: "zara",
        image: "/zara.svg",
        method,
      },
      {
        id: 5,
        name: "Ann Taylor",
        image: "/annTaylor.svg",
        method,
      },
      {
        id: 3,
        name: "Forever 21",
        image: "/forever.svg",
        method,
      },
    ]);
  } catch (err: any | { statusCode: number } | { message: string }) {
    res.status(405).json({ statusCode: 500, message: err.message });
  }
}
