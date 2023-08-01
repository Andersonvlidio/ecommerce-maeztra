import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, query } = req;

    if (method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
    }

    res.status(200).json([
      {
        id: 1,
        name: "Faux Suede Mini Skirt",
        description:
          "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: "500,00",
        image: "/fauxSuedeMiniSkirt.svg",
        skuImage: "/selectedColor1.svg",
        method,
        query: query.sku,
      },
      {
        id: 2,
        name: "Ruched Rose Print Mini Skirt",
        description:
          "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: "320,00",
        image: "/ruchedRosePrintMiniSkirt.svg",
        skuImage: "/selectedColor2.svg",
        method,
        query: query.s,
      },
      {
        id: 3,
        name: "Faux Suede Mini Skirt",
        description:
          "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: "500,00",
        image: "/fauxSuedeMiniSkirt.svg",
        skuImage: "/selectedColor1.svg",
        method,
        query: query.s,
      },
      {
        id: 4,
        name: "Ruched Rose Print Mini Skirt",
        description:
          "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: "320,00",
        image: "/ruchedRosePrintMiniSkirt.svg",
        skuImage: "/selectedColor2.svg",
        method,
        query: query.s,
      },
      {
        id: 5,
        name: "Faux Suede Mini Skirt",
        description:
          "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: "500,00",
        image: "/fauxSuedeMiniSkirt.svg",
        skuImage: "/selectedColor1.svg",
        method,
        query: query.s,
      },
      {
        id: 6,
        name: "Ruched Rose Print Mini Skirt",
        description:
          "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: "320,00",
        image: "/ruchedRosePrintMiniSkirt.svg",
        skuImage: "/selectedColor2.svg",
        method,
        query: query.s,
      },
      {
        id: 7,
        name: "Faux Suede Mini Skirt",
        description:
          "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: "500,00",
        image: "/fauxSuedeMiniSkirt.svg",
        skuImage: "/selectedColor1.svg",
        method,
        query: query.s,
      },
      {
        id: 8,
        name: "Ruched Rose Print Mini Skirt",
        description:
          "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: "320,00",
        image: "/ruchedRosePrintMiniSkirt.svg",
        skuImage: "/selectedColor2.svg",
        method,
        query: query.s,
      },
    ]);
  } catch (err: any | { statusCode: number } | { message: string }) {
    res.status(405).json({ statusCode: 500, message: err.message });
  }
}
