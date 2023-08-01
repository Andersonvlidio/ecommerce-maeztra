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
        name: "Produtos importados",
        description: "Produto de Alta Qualidade",
        image: "/imported.svg",
        method,
      },
      {
        name: "Estoque no Brazil",
        description: "Produtos mais perto de você!",
        image: "/stock.svg",
        method,
      },
      {
        name: "Trocas Garantidas",
        description: "Trocas em até 48 horas, vejas as regras",
        image: "/exchange.svg",
        method,
      },
      {
        name: "Ganhe 5% off",
        description: "Pagando à vista no Cartão",
        image: "/discount.svg",
        method,
      },
      {
        name: "Frete Grátis",
        description: "Em compras acima de R$ 499,00",
        image: "/shipping.svg",
        method,
      },
      {
        name: "Trocas Garantidas",
        description: "Trocas em até 48 horas, vejas as regras",
        image: "/exchange.svg",
        method,
      },
    ]);
  } catch (err: any | { statusCode: number } | { message: string }) {
    res.status(405).json({ statusCode: 500, message: err.message });
  }
}
