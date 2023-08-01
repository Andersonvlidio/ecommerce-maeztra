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
        name: "Novidades",
        icon: "/news.svg",
        method,
      },
      {
        id: 2,
        name: "Vestidos",
        method,
      },
      {
        id: 3,
        name: "Roupas",
        method,
      },
      {
        id: 4,
        name: "Sapatos",
        method,
      },
      {
        id: 5,
        name: "Lingerie",
        method,
      },
      {
        id: 6,
        name: "Acessórios",
        method,
      },
      {
        id: 7,
        name: "OUTLET",
        method,
      },
    ]);
  } catch (err: any | { statusCode: number } | { message: string }) {
    res.status(405).json({ statusCode: 500, message: err.message });
  }
}
