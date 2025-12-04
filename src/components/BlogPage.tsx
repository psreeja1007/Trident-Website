import React, { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
// import { motion } from "framer-motion";

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort blogs by date (latest first)
        const sorted = data.sort((a: any, b: any) => {
          const [dayA, monthA, yearA] = a.published_at.split("-").map(Number);
          const [dayB, monthB, yearB] = b.published_at.split("-").map(Number);
          return new Date(yearB, monthB - 1, dayB).getTime() - new Date(yearA, monthA - 1, dayA).getTime();
        });
        setBlogs(sorted);
      })
      .catch((err) => console.error("Error loading blog data:", err));
  }, []);


  return (
    <div className="pt-4 px-6 w-full">

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                 gap-10 pb-10 px-4">
        {blogs.map((blog: any) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            short_description={blog.short_description}
            image={blog.image}
            published_at={blog.published_at}
          />
        ))}
      </div>
    </div>
  );
};
