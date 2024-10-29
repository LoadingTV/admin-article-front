"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css"; // или quill.bubble.css для другого стиля
import Quill from "quill";
import "quill-table"; // Импортируем плагин для таблиц

// Интерфейс для данных статьи
interface ArticleData {
  title: string;
  metaDescription: string;
  text: string;
  images: File[];
  link: string;
}

const ArticleEditor: React.FC = () => {
  const [articleData, setArticleData] = useState<ArticleData>({
    title: "",
    metaDescription: "",
    text: "",
    images: [],
    link: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef<Quill | null>(null); // Ссылка на экземпляр Quill

  useEffect(() => {
    const quill = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "table"],
        ],
      },
    });

    editorRef.current = quill;

    // Отслеживаем изменения в редакторе
    quill.on("text-change", () => {
      const html = quill.root.innerHTML;
      setArticleData((prev) => ({ ...prev, text: html }));
    });

    // Очистка редактора при размонтировании компонента
    return () => {
      editorRef.current = null; // Обнуляем реф
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("metaDescription", articleData.metaDescription);
    formData.append("text", articleData.text);
    formData.append("link", articleData.link);

    articleData.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("http://localhost:3001/api/articles", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Статья успешно создана!");
        setArticleData({
          title: "",
          metaDescription: "",
          text: "",
          images: [],
          link: "",
        });
        if (editorRef.current) {
          editorRef.current.setContents([]); // Очищаем редактор
        }
      } else {
        const errorData = await response.json();
        alert(
          `Ошибка: ${
            errorData.message || "Произошла ошибка при создании статьи"
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке данных");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArticleData((prev) => ({
        ...prev,
        images: Array.from(e.target.files || []),
      }));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Создание статьи
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Название статьи:
            </label>
            <input
              type="text"
              value={articleData.title}
              onChange={(e) =>
                setArticleData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Meta Description:
            </label>
            <textarea
              value={articleData.metaDescription}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  metaDescription: e.target.value,
                }))
              }
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Текст статьи:
            </label>
            <div id="editor" className="h-64 text-black"></div>{" "}
            {/* Здесь будет Quill */}
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Изображения:
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              accept="image/*"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Ссылка:
            </label>
            <input
              type="url"
              value={articleData.link}
              onChange={(e) =>
                setArticleData((prev) => ({ ...prev, link: e.target.value }))
              }
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Создание..." : "Создать статью"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditor;
