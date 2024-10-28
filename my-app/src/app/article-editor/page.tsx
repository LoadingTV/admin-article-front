"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

// Импортируем редактор динамически, чтобы избежать ошибок SSR
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);

    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("metaDescription", articleData.metaDescription);
    formData.append("text", htmlContent);
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
        setEditorState(EditorState.createEmpty());
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
              className="w-full text-black  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
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
            <label className="block mb-2 text-lg font-semibold  ">
              Текст статьи:
            </label>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="border border-gray-300 rounded-lg  "
              editorClassName="p-2 min-h-[200px] focus:outline-none text-black flex"
              toolbar={{
                options: ["inline", "blockType", "list", "link"],
                inline: {
                  options: ["bold", "italic", "underline"],
                },
                blockType: {
                  inDropdown: true,
                },
                list: {
                  inDropdown: true,
                },
                link: {
                  popupClassName: "my-popup-classname",
                },
              }}
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold">
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
