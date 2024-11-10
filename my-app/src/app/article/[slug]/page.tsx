"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Author {
  user_id: number;
  name: string;
  email: string;
}

interface Image {
  image_id: number;
  url: string;
  caption: string;
  alt_text: string;
}

interface Article {
  article_id: number;
  title: string;
  keyPoints: string;
  slug: string;
  created_at: string;
  updated_at: string;
  meta_description: string;
  author_id: number;
  author: Author;
  images: Image[];
  content: string;
}

async function fetchArticles(): Promise<Article[]> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles`;
  console.log("Fetching articles from API:", apiUrl); // Логируем URL для проверки

  const response = await fetch(apiUrl);
  if (!response.ok) {
    console.error("Network response was not ok", response.statusText);
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const slug = params.slug as string; // Используем useParams для получения slug

  useEffect(() => {
    if (!slug || typeof slug !== "string") return; // Проверка на наличие slug и его тип

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const articles = await fetchArticles();
        const foundArticle = articles.find((art) => art.slug === slug);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Ошибка при загрузке статьи:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) return <p>Загрузка...</p>;
  if (!article) return <p>Статья не найдена.</p>;

  return (
    <div className="w-full">
      <div className="relative w-full h-96">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {article.images.length > 0 ? (
            <Image
              src={article.images[0].url}
              alt={article.images[0].alt_text || article.title}
              width={500}
              height={300}
              className="absolute w-full inset-0 object-cover"
            />
          ) : (
            <div className="h-full bg-gray-200 flex items-center justify-center">
              <p>Изображение отсутствует.</p>
            </div>
          )}
          <div className="text-center text-white p-4">
            <h1 className="text-3xl font-semibold">{article.title}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mt-12 mb-12 w-2/3">
        <div className="main">
          <h1 className="text-4xl font-semibold mb-2">{article.title}</h1>
          <p className="text-gray-500 mb-4">
            {new Date(article.created_at).toLocaleString()}
          </p>

          <h3 className="text-xl font-semibold mb-2">
            <strong>Основные моменты</strong>
          </h3>
          <ul className="list-disc list-inside mb-4">
            {article.keyPoints ? (
              article.keyPoints.split(",").map((takeaway, index) => (
                <li key={index} className="mb-1">
                  {takeaway.trim()}
                </li>
              ))
            ) : (
              <li>Основные моменты не указаны.</li>
            )}
          </ul>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              <strong>Контент</strong>
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
