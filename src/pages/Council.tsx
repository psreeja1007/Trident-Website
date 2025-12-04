import React from "react";
import { motion } from "framer-motion";
import { CouncilInfo } from "../components/CouncilInfo";

export const Council = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14 mt-10"
      >
        <h1 className="text-4xl font-bold text-purple-800">Council 2025-26</h1>
        <p className="mt-4 text-gray-600">
          Have questions? Reach out to our council members directly.
        </p>
      </motion.div>

      <CouncilInfo />
    </section>
  );
};
