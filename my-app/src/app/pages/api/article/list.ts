// pages/api/article/list.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/article/list`
      );

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: "Ошибка при получении списка файлов" });
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
