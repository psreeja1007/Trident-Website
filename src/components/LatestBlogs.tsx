import React, { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { motion } from "framer-motion";

export const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/blog.json`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a: any, b: any) => {
          const [dayA, monthA, yearA] = a.published_at.split("-").map(Number);
          const [dayB, monthB, yearB] = b.published_at.split("-").map(Number);
          return (
            new Date(yearB, monthB - 1, dayB).getTime() -
            new Date(yearA, monthA - 1, dayA).getTime()
          );
        });
        setBlogs(sorted.slice(0, 3));
      })
      .catch((err) => console.error("Error loading blog data:", err));
  }, []);

  return (
    <div className="pt-24 px-6 w-full">
      {/* Title */}
      {/* Title with emojis on both sides */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-10"
      >
        <span className="text-2xl">🌟</span>

        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 text-center">
          Check out our <span className="text-primary">latest blogs</span>
        </h2>

        <span className="text-2xl">📝</span>
      </motion.div>


      {/* Blog Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 px-4"
      >
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
      </motion.div>
    </div>
  );
};
