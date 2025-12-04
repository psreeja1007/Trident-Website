import React from "react";
import { motion } from "framer-motion";
import { FacilitiesInfo } from "../components/FacilitiesInfo";

export const Facilities = () => {
  return (
    <div className="w-full pt-32"> {/* Added padding top to avoid navbar collision */}
      
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl font-bold text-purple-800">Facilities offered by Trident</h1>
        <p className="mt-4 text-gray-600">
          All the cool things Trident possess
        </p>
      </motion.div>

      <FacilitiesInfo />
    </div>
  );
};
