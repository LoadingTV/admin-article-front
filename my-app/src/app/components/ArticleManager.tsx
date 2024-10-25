// components/ArticleManager.tsx
import { useState, useEffect } from "react";

const ArticleManager: React.FC = () => {
  // Указываем тип для массива файлов
  const [files, setFiles] = useState<string[]>([]);

  // Функция для получения списка файлов
  const fetchFiles = async () => {
    const res = await fetch("/api/article/list");

    if (!res.ok) {
      console.error("Ошибка при получении списка файлов");
      return;
    }

    const data: string[] = await res.json();
    setFiles(data);
  };

  // Функция для создания нового файла
  const createFile = async () => {
    const res = await fetch("/api/article/create", { method: "POST" });

    if (!res.ok) {
      console.error("Ошибка при создании файла");
      return;
    }

    fetchFiles(); // Обновляем список файлов после создания
  };

  // Используем useEffect для получения списка файлов при монтировании компонента
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <button onClick={createFile}>Создать файл</button>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleManager;
