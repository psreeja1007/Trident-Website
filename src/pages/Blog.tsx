import React from "react";
import { motion } from "framer-motion";
import { BlogPage } from "../components/BlogPage";

export const Blog = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14 mt-10"
      >
        <h1 className="text-4xl font-bold text-purple-800">Trident Blog</h1>
        <p className="mt-4 text-gray-600">
          All the updates regarding hostel events at one place
        </p>
      </motion.div>

      <BlogPage />
    </section>
  );
};
