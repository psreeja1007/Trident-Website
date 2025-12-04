import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutIntro } from "../components/AboutIntro";


export const Hero = () => {
  return (
    <>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-full min-h-screen flex items-start pt-20" // moved text up
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/home/trident-sky.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Trident
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-white">
              Your Home Away from Home
            </span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed">
           A place where comfort, friendships, and unforgettable college memories are nurtured every day.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("about-intro")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="px-6 py-3 rounded-full border border-black-200 bg-black-500 text-white font-medium shadow-md hover:bg-black-700 transition"
            >
              Explore Hostel
            </motion.button>

            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-black-200 text-grey-200 font-medium bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
            >
              Contact Us
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>

      <motion.div id="about-intro" className="py-20">
        <AboutIntro/>
      </motion.div>
    </>
  );
};
