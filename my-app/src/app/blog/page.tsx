// types.ts
type BlogPost = {
  id: string;
  title: string;
  imageUrl: string;
  keyPoints: string[];
  slug: string;
};

import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getBlogPosts(): Promise<BlogPost[]> {
  // Replace this with your actual data fetching logic
  // Example: return await prisma.blogPosts.findMany()
  return [];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <div className="mb-4">
              <Image
                src="/images/icons/blog_icon.svg"
                alt="Blog"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-5xl font-semibold mb-4">The Blog</h1>
            <h2 className="text-xl text-center">
              We Provide A Variety Of Spray Polyurethane Foam Solutions
            </h2>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
                  <h3 className="text-white text-2xl font-semibold text-center">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <ul className="list-disc ml-6 mb-6 flex-1">
                  {post.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-600 mb-2">
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex justify-center items-center px-6 py-2 bg-transparent border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
