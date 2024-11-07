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
  const { user, logout } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true); // Устанавливаем состояние загрузки
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles`
      );
      const text = await response.text();

      if (!text) {
        console.error("Received empty response");
        setArticles([]);
        setFilteredArticles([]);
        return;
      }

      const data = JSON.parse(text);
      if (Array.isArray(data)) {
        setArticles(data);
        setFilteredArticles(data);
      } else {
        console.error("Expected an array, but received:", data);
        setArticles([]);
        setFilteredArticles([]);
      }
    } catch (error) {
      console.error("Error loading articles:", error);
      setArticles([]);
      setFilteredArticles([]);
    } finally {
      setLoading(false);
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

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      {loading ? (
        <p>Loading user data...</p>
      ) : user ? (
        <>
          <p className="text-lg mb-2">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Surname:</span> {user.surname}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold">Role:</span>{" "}
            {user.role?.role_name || "No role assigned"}
          </p>
          <button
            onClick={handleLogout}
            className="mb-4 bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <p>No user data found.</p> // Обработка случая, когда пользователь не найден
      )}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Projects</h2>
      <ul className="list-disc list-inside pl-4 space-y-2">
        <li>Project 1</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Published Articles:</p>
          <p>
            {
              articles.filter((article) => article.status === "published")
                .length
            }
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Drafts:</p>
          <p>
            {articles.filter((article) => article.status === "draft").length}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">Ready for Publication:</p>
          <p>
            {articles.filter((article) => article.status === "ready").length}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Article Filters</h2>
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
              ? "All"
              : status === "draft"
              ? "Drafts"
              : status === "published"
              ? "Published"
              : "Ready for Publication"}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Article List</h2>
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
            <p className="text-sm text-gray-500">Status: {article.status}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href="/article-editor" legacyBehavior>
          <a className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
            Create New Article
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
