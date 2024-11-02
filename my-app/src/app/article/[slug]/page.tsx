"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
  const response = await fetch(`http://localhost:3001/api/articles`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const articles = await fetchArticles();
        const foundArticle = articles.find((art) => art.slug === params.slug);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug]);

  if (loading) return <p>Loading...</p>;

  if (!article) return <p>Article not found.</p>;

  return (
    <div className="main-content">
      <div className="relative w-full h-96">
        {article.images.length > 0 ? (
          <Image
            src={article.images[0].url}
            alt={article.images[0].alt_text || article.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover"
          />
        ) : (
          <div className="h-full bg-gray-200 flex items-center justify-center">
            <p>No image available.</p>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-4">
            <h1 className="text-3xl font-bold">{article.title}</h1>
          </div>
        </div>
      </div>

      <div className="main">
        <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
        <p className="text-gray-500 mb-4">
          {new Date(article.created_at).toLocaleString()}
        </p>

        <h3 className="text-xl font-semibold mb-2">
          <strong>Key Takeaways</strong>
        </h3>
        <ul className="list-disc list-inside mb-4">
          {article.keyPoints ? (
            article.keyPoints.split(",").map((takeaway, index) => (
              <li key={index} className="mb-1">
                {takeaway.trim()}
              </li>
            ))
          ) : (
            <li>No key takeaways available.</li>
          )}
        </ul>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            <strong>Content</strong>
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
}
