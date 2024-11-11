"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
          `${process.env.NEXT_PUBLIC_API_URL}/api/articles/latest`
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
    <div className="main">
      <div className="blog-container">
        <div className="services-grid">
          {articles.map((article) => (
            <div key={article.article_id} className="column">
              <div className="div-3">
                {article.images.length > 0 && (
                  <Image
                    // src={article.images[0].url}
                    src="/my-app/public/images/pictures/baner_slide_1_1080p.webp"
                    alt={article.images[0].alt_text}
                    width={500}
                    height={200}
                    className="blog-img object-cover"
                  />
                )}
                <div className="div-4">
                  <div className="div-5">{article.title}</div>

                  <div className="div-6">
                    <ul>
                      {article.keyPoints.split(",").map((point, index) => (
                        <li key={index}>{point.trim()}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="div-learn-btn-blog">
                    <a
                      href={`/article/${article.slug}`}
                      className="learn-btn-blog"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
