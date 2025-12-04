import { motion } from "framer-motion";

export const PhotoDump = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-25 pt-[100px]"
    >
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-purple-800  mb-16 tracking-wide">
        Photo Dump 📸✨
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 place-items-center">

        {/* Polaroid 1 */}
        <motion.div
          initial={{ rotate: -6, opacity: 0 }}
          whileInView={{ rotate: -2, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF9E8] p-3 rounded-lg shadow-xl border border-[#e7dfce] w-[260px]"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/home/h15.jpeg`}
            alt="Hostel lawn"
            className="w-full h-64 object-cover rounded"
          />
          <p className="text-center mt-3 text-sm font-medium text-gray-700 italic">
            Evenings on the Greens 💚
          </p>
        </motion.div>

        {/* Polaroid 2 */}
        <motion.div
          initial={{ rotate: 5, opacity: 0 }}
          whileInView={{ rotate: 6, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF9E8] p-3 rounded-lg shadow-xl border border-[#e7dfce] w-[260px]"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/home/sports.jpeg`}
            alt="H15"
            className="w-full h-64 object-cover rounded"
          />
          <p className="text-center mt-3 text-sm font-medium text-gray-700 italic">
            Girls who win together, shine together ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ rotate: -6, opacity: 0 }}
          whileInView={{ rotate: -3, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF9E8] p-3 rounded-lg shadow-xl border border-[#e7dfce] w-[260px]"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/home/trophies.jpeg`}
            alt="Trophy Shelf"
            className="w-full h-64 object-cover rounded"
          />
          <p className="text-center mt-3 text-sm font-medium text-gray-700 italic">
            Where All the GC Glory Lives 🏆
          </p>
        </motion.div>

        <motion.div
          initial={{ rotate: 4, opacity: 0 }}
          whileInView={{ rotate: 7, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFF9E8] p-3 rounded-lg shadow-xl border border-[#e7dfce] w-[260px]"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/home/hostel2.jpeg`}
            alt="Hostel view"
            className="w-full h-64 object-cover rounded"
          />
          <p className="text-center mt-3 text-sm font-medium text-gray-700 italic">
            Backdrop of countless memories 🤍
          </p>
        </motion.div>


      </div>
    </motion.section>
  );
};
