"use client";
import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const apiKey = process.env.NEXT_PUBLIC_TINY_MCE_API_KEY;

interface ArticleData {
  title: string;
  metaDescription: string;
  keyPoints: string;
  text: string;
  slug: string;
  authorId: number;
  images: File[];
}

const ArticleEditor: React.FC = () => {
  const [articleData, setArticleData] = useState<ArticleData>({
    title: "",
    metaDescription: "",
    keyPoints: "",
    text: "",
    slug: "",
    authorId: 1,
    images: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditorChange = (content: string) => {
    setArticleData((prev) => ({ ...prev, text: content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form Submission Started");

    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("keyPoints", articleData.keyPoints);
    formData.append("slug", articleData.slug);
    formData.append("content", articleData.text);
    formData.append("metaDescription", articleData.metaDescription);
    formData.append("authorId", String(articleData.authorId));

    articleData.images.forEach((image) => {
      formData.append("files", image);
    });

    try {
      const response = await fetch("http://localhost:3001/api/articles", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        alert(
          `Ошибка: ${
            errorData.message || "Произошла ошибка при создании статьи"
          }`
        );
      } else {
        alert("Статья успешно создана!");
        console.log("Article successfully created.");
        // Resetting the form data
        setArticleData({
          title: "",
          metaDescription: "",
          keyPoints: "",
          text: "",
          slug: "",
          authorId: 1,
          images: [],
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке данных");
    } finally {
      setIsSubmitting(false);
      console.log("Form Submission Ended");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFiles = Array.from(files);
      setArticleData((prev) => ({
        ...prev,
        images: selectedFiles,
      }));
      console.log("Selected Images:", selectedFiles);
    } else {
      setArticleData((prev) => ({
        ...prev,
        images: [],
      }));
      console.log("No images selected.");
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
              Ключевые моменты:
            </label>
            <textarea
              value={articleData.keyPoints}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  keyPoints: e.target.value,
                }))
              }
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
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
            <Editor
              apiKey={apiKey}
              init={{
                height: 500,
                menubar: "favs file edit view insert format tools table help",
                plugins: [
                  "advlist",
                  "autolink",
                  "link",
                  "image",
                  "lists",
                  "charmap",
                  "preview",
                  "anchor",
                  "pagebreak",
                  "searchreplace",
                  "wordcount",
                  "visualblocks",
                  "visualchars",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "emoticons",
                  "help",
                ],
                toolbar:
                  "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link image | print preview media fullscreen | " +
                  "forecolor backcolor emoticons | help",
              }}
              onEditorChange={handleEditorChange}
            />
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
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Slug:
            </label>
            <input
              type="text"
              value={articleData.slug}
              onChange={(e) =>
                setArticleData((prev) => ({ ...prev, slug: e.target.value }))
              }
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
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
