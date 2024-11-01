"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  status: "draft" | "published" | "ready";
}

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]); // Указан тип Article[]
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]); // Указан тип Article[]
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("http://localhost:3001/articles");
      const data = await response.json();

      if (Array.isArray(data)) {
        setArticles(data);
        setFilteredArticles(data);
      } else {
        console.error("Ожидался массив, но получен другой формат:", data);
        setArticles([]);
        setFilteredArticles([]);
      }
    } catch (error) {
      console.error("Ошибка при загрузке статей:", error);
      setArticles([]);
      setFilteredArticles([]);
    }
  };

  const handleFilterChange = (status: string) => {
    setFilter(status);
    setFilteredArticles(
      status === "all"
        ? articles
        : articles.filter((article) => article.status === status)
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Профиль пользователя</h1>
      {user && (
        <>
          <p className="text-lg mb-2">
            <span className="font-semibold">Имя:</span> {user.name}
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </>
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Проекты</h2>
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li>Проект 1</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Метрики</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Опубликовано статей:</p>
          <p>
            {
              articles.filter((article) => article.status === "published")
                .length
            }
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Черновики:</p>
          <p>
            {articles.filter((article) => article.status === "draft").length}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Готово к публикации:</p>
          <p>
            {articles.filter((article) => article.status === "ready").length}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Фильтры по статьям</h2>
      <div className="flex space-x-4 mb-6">
        {["all", "draft", "published", "ready"].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === status
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {status === "all"
              ? "Все"
              : status === "draft"
              ? "Черновики"
              : status === "published"
              ? "Опубликованные"
              : "Готово к публикации"}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Список статей</h2>
      <ul className="space-y-4">
        {filteredArticles.map((article) => (
          <li
            key={article.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <Link href={`/articles/${article.id}`} legacyBehavior>
              <a className="text-blue-600 font-medium hover:underline">
                {article.title}
              </a>
            </Link>
            <p className="text-sm text-gray-500">Статус: {article.status}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href="/article-editor" legacyBehavior>
          <a className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
            Создать новую статью
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
