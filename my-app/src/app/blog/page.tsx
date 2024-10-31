"use client";
import React, { useEffect, useState } from "react";

interface Image {
  image_id: number;
  url: string;
  alt_text: string;
}

interface Article {
  article_id: number;
  title: string;
  keyPoints: string;
  slug: string;
  images: Image[];
}

const BlogArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/articles/latest"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles.map((article) => (
        <div
          key={article.article_id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          {article.images.length > 0 && (
            <img
              src={article.images[0].url}
              alt={article.images[0].alt_text}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <ul className="list-disc list-inside mb-2">
              {article.keyPoints.split(",").map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
            </ul>
            <a
              href={`/article/${article.slug}`} // Предполагается, что у вас есть роут для деталей статьи
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogArticles;
