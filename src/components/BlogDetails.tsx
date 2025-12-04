import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionImg = motion.img;

export const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b: any) => String(b.id) === String(id));
        setBlog(found);
      });
  }, [id]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  // Convert "DD-MM-YYYY" to Date object
  const [day, month, year] = blog.published_at.split("-");
  const formattedDate = new Date(Number(year), Number(month) - 1, Number(day))
    .toLocaleDateString("en-US", { 
      day: "2-digit", 
      month: "short", 
      year: "numeric" 
    });

  return (
  <div className="relative max-w-4xl mx-auto pt-28 px-6">

    {/* Title with Floating Emojis */}
    <div className="relative flex items-center justify-center mb-6">
      
      {/* Left Emoji */}
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="text-4xl absolute left-0 -translate-x-12 select-none"
      >
        ✨
      </motion.span>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-purple-800 text-center drop-shadow-sm px-8">
        {blog.title}
      </h1>

      {/* Right Emoji */}
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8}}
        className="text-4xl absolute right-0 translate-x-12 select-none"
      >
        🌸
      </motion.span>

    </div>


    {/* Date */}
    <p className="text-gray-500 mb-8 text-center text-lg">
      Published on {formattedDate}
    </p>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-10"
    >
      <MotionImg
        src={`${process.env.PUBLIC_URL}/${blog.image}`}
        alt={blog.title}
        className="h-96 w-auto object-cover rounded-3xl shadow-xl border border-purple-200"
      />
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-lg border border-purple-100 text-lg"
    >
      <div
        className="prose prose-purple max-w-none text-justify leading-relaxed prose-lg 
                   prose-p:my-4 prose-h2:text-purple-700 prose-h3:text-purple-700"
        dangerouslySetInnerHTML={{ __html: blog.long_description }}
      ></div>
    </motion.div>

    {/* Back Button */}
    <div className="flex justify-center mt-12">
      <Link to="/blog">
        <button className="px-6 py-2 rounded-full bg-white text-purple-600 font-medium border border-purple-300 shadow-sm hover:bg-purple-50 transition-colors duration-200">
          ← Back to Blogs
        </button>
      </Link>
    </div>
  </div>
);

};
