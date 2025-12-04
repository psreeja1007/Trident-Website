import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
}

export const FacilityCard = ({ title, description, image}: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-purple-100 
                 p-4 max-w-sm mx-auto flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300 mb-3"
    >
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-2xl">
        <img
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col px-2 pb-2">
        <h3 className="text-xl font-semibold text-purple-800 mb-1">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
