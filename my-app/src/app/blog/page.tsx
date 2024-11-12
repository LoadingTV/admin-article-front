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

  const exampleCard: Article = {
    article_id: 0,
    title: "Example Article Title",
    keyPoints: "Key point 1, Key point 2, Key point 3",
    slug: "example-article",
    images: [
      {
        image_id: 1,
        url: "/images/pictures/baner_lw-slider_1_1440p.webp",
        alt_text: "Example Image",
      },
    ],
  };

  return (
    <div className="main">
      <div className="blog-container">
        <div className="services-grid">
          {/* Static example card */}
          <div key={exampleCard.article_id} className="column">
            <div className="div-3">
              {exampleCard.images.length > 0 ? (
                <Image
                  src={exampleCard.images[0].url}
                  alt={exampleCard.images[0].alt_text}
                  width={500}
                  height={200}
                  className="blog-img object-cover"
                  placeholder="blur"
                  blurDataURL="/images/pictures/baner_lw-slider_1_1440p.webp"
                />
              ) : (
                <div
                  style={{
                    width: "500px",
                    height: "200px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Loading...
                </div>
              )}
              <div className="div-4">
                <div className="div-5">{exampleCard.title}</div>
                <div className="div-6">
                  <ul>
                    {exampleCard.keyPoints.split(",").map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div className="div-learn-btn-blog">
                  <a
                    href={`/article/${exampleCard.slug}`}
                    className="learn-btn-blog"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div key={exampleCard.article_id} className="column">
            <div className="div-3">
              {exampleCard.images.length > 0 ? (
                <Image
                  src={exampleCard.images[0].url}
                  alt={exampleCard.images[0].alt_text}
                  width={500}
                  height={200}
                  className="blog-img object-cover"
                  placeholder="blur"
                  blurDataURL="/images/pictures/baner_lw-slider_1_1440p.webp"
                />
              ) : (
                <div
                  style={{
                    width: "500px",
                    height: "200px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Loading...
                </div>
              )}
              <div className="div-4">
                <div className="div-5">{exampleCard.title}</div>
                <div className="div-6">
                  <ul>
                    {exampleCard.keyPoints.split(",").map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div className="div-learn-btn-blog">
                  <a
                    href={`/article/${exampleCard.slug}`}
                    className="learn-btn-blog"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div key={exampleCard.article_id} className="column">
            <div className="div-3">
              {exampleCard.images.length > 0 ? (
                <Image
                  src={exampleCard.images[0].url}
                  alt={exampleCard.images[0].alt_text}
                  width={500}
                  height={200}
                  className="blog-img object-cover"
                  placeholder="blur"
                  blurDataURL="/images/pictures/baner_lw-slider_1_1440p.webp"
                />
              ) : (
                <div
                  style={{
                    width: "500px",
                    height: "200px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Loading...
                </div>
              )}
              <div className="div-4">
                <div className="div-5">{exampleCard.title}</div>
                <div className="div-6">
                  <ul>
                    {exampleCard.keyPoints.split(",").map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div className="div-learn-btn-blog">
                  <a
                    href={`/article/${exampleCard.slug}`}
                    className="learn-btn-blog"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Dynamic articles */}
          {articles.map((article) => (
            <div key={article.article_id} className="column">
              <div className="div-3">
                {article.images.length > 0 ? (
                  <Image
                    src={article.images[0].url}
                    alt={article.images[0].alt_text}
                    width={500}
                    height={200}
                    className="blog-img object-cover"
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder-image.jpg" // Same placeholder for dynamic images
                  />
                ) : (
                  <div
                    style={{
                      width: "500px",
                      height: "200px",
                      backgroundColor: "#ccc", // Grey placeholder background
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    Loading...
                  </div>
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
