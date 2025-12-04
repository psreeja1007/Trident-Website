import { motion } from "framer-motion";

export const CouncilCard = ({ title, children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        boxShadow: "0 10px 25px rgba(147, 51, 234, 0.25)", // subtle purple glow
      }}
      className="bg-white shadow-md border border-purple-200 rounded-3xl p-10 mb-10 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        {title}
      </h2>

      <div className="flex flex-col gap-6">{children}</div>
    </motion.div>
  );
};
