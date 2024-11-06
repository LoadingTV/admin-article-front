// pages/api/article/create.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/article/create`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: "Ошибка при создании файла" });
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
