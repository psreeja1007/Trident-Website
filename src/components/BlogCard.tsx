import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  short_description: string;
  image: string;
  published_at: string;
}

export const BlogCard = ({
  id,
  title,
  short_description,
  image,
  published_at
}: BlogCardProps) => {
  // Convert "DD-MM-YYYY" to Date object
  const [day, month, year] = published_at.split("-");
  const formattedDate = new Date(Number(year), Number(month) - 1, Number(day))
    .toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <Link to={`/blog/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-md border border-purple-200 
        p-6 max-w-3xl mx-auto cursor-pointer hover:shadow-xl flex flex-col"
      >
        {/* Image now on top */}
        <div className="w-full h-60 overflow-hidden rounded-2xl mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content below the image */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-purple-800">{title}</h3>
          <p className="text-gray-700 mt-2">{short_description}</p>

          <span className="text-sm text-gray-500 mt-4">
            Published on {formattedDate}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
