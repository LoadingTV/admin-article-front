import React, { useEffect, useState } from "react";
import Image from "next/image"; // Импортируем компонент Image

interface ImageData {
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
  author: {
    user_id: number;
    name: string;
    email: string;
  };
  images: ImageData[]; // Здесь указано, что у статьи могут быть изображения
  content: string;
}

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const articleId = 1; // ID статьи, которую вы хотите получить

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Article = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Ошибка при загрузке статьи. Пожалуйста, попробуйте снова.");
      }
    };

    fetchArticle();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!article) {
    return <div className="text-center">Loading...</div>;
  }

  // Разбиваем keyPoints на массив, если он разделен запятыми
  const keyPointsArray = article.keyPoints
    .split(",")
    .map((point) => point.trim());

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{article.title}</h2>

      <div className="mb-4">
        <strong>Author:</strong> {article.author.name}
      </div>

      {/* Отображаем изображения статьи, если они есть */}
      {article.images.length > 0 && (
        <div className="mb-4">
          <strong>Images:</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {article.images.map((image) => (
              <ImageWithPlaceholder
                key={image.image_id}
                src={image.url}
                alt={image.alt_text}
                caption={image.caption}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <strong>Content:</strong>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div>
        <strong>Key Points:</strong>
        <ul className="list-disc list-inside">
          {keyPointsArray.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ImageWithPlaceholder: React.FC<{
  src: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => {
  const [isLoading, setIsLoading] = useState(true);
  const placeholder = "/path/to/placeholder.jpg";

  return (
    <div className="relative">
      <Image
        src={isLoading ? placeholder : src}
        alt={alt}
        className="object-cover w-full h-48 rounded-md"
        width={400}
        height={300}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {caption && <p className="text-sm">{caption}</p>}
    </div>
  );
};

export default ArticleDetail;
