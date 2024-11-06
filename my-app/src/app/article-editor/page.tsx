"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { GetServerSideProps } from "next";
const apiKey = process.env.NEXT_PUBLIC_TINY_MCE_API_KEY;

interface Faq {
  question: string;
  answer: string;
}

interface ArticleData {
  title: string;
  metaDescription: string;
  keyPoints: string;
  text: string;
  slug: string;
  authorId: number;
  images: File[];
  faqs: Faq[];
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
    faqs: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleEditorChange = (content: string) => {
    setArticleData((prev) => ({ ...prev, text: content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("slug", articleData.slug);
    formData.append("metaDescription", articleData.metaDescription);
    formData.append("keyPoints", articleData.keyPoints);
    formData.append("content", articleData.text);
    formData.append("authorId", articleData.authorId.toString());

    // Добавление FAQ в форму
    articleData.faqs.forEach((faq, index) => {
      formData.append(`faqs[${index}][question]`, faq.question);
      formData.append(`faqs[${index}][answer]`, faq.answer);
    });

    if (articleData.images && articleData.images.length > 0) {
      articleData.images.forEach((image) => {
        formData.append("images", image);
      });
    }

    console.log("Form Data Before Submission:", Array.from(formData.entries()));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        setErrorMessage(
          `Ошибка: ${
            errorData.message || "Произошла ошибка при создании статьи"
          }`
        );
      } else {
        setSuccessMessage("Статья успешно создана!");
        console.log("Article successfully created.");

        setArticleData({
          title: "",
          metaDescription: "",
          keyPoints: "",
          text: "",
          slug: "",
          authorId: 1,
          images: [],
          faqs: [],
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Произошла ошибка при отправке данных");
    } finally {
      setIsSubmitting(false);
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

  const handleAddFaq = () => {
    setArticleData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const handleFaqChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newFaqs = [...articleData.faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setArticleData((prev) => ({ ...prev, faqs: newFaqs }));
  };

  const handleRemoveFaq = (index: number) => {
    setArticleData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Создание статьи
        </h1>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
            {successMessage}
          </div>
        )}
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
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "directionality",
                  "template",
                  "paste",
                ],
                toolbar:
                  "undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image | preview code",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              value={articleData.text}
              onEditorChange={handleEditorChange}
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
              className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              Изображения:
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="text-black p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-black">
              FAQ:
            </label>
            {articleData.faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  placeholder="Вопрос"
                  value={faq.question}
                  onChange={(e) =>
                    handleFaqChange(index, "question", e.target.value)
                  }
                  className="text-black p-3 border border-gray-300 rounded-lg w-full mb-2"
                />
                <textarea
                  placeholder="Ответ"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFaqChange(index, "answer", e.target.value)
                  }
                  className="text-black p-3 border border-gray-300 rounded-lg w-full"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFaq(index)}
                  className="text-red-500 mt-2"
                >
                  Удалить FAQ
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFaq}
              className="text-blue-500"
            >
              Добавить FAQ
            </button>
          </div>

          <button
            type="submit"
            className={`w-full p-3 bg-blue-600 text-white font-semibold rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Создание..." : "Создать статью"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditor;
