import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PhotoItem {
  id: string;
  photo: string;
}

export const PhotoGallery = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/gallery.json`)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error("Error loading gallery:", err));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-25 pt-[100px] text-center"
    >
      <h2 className="text-center text-4xl font-bold text-purple-800 mb-3 tracking-wide">
        Gallery
      </h2>
      <p className="text-gray-600 mb-8">All the precious moments wrapped at one place</p>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {photos.map((p) => (
          <motion.img
            key={p.id}
            src={`${process.env.PUBLIC_URL}/${p.photo}`}
            alt={`Gallery ${p.id}`}
            className="w-full h-80 object-cover rounded-xl shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
