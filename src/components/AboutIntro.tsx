import { motion } from "framer-motion";

export const AboutIntro = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 px-4 flex justify-center relative"
    >
      {/* FLOATING STICKERS */}
      
      {/* Maggi */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-12 left-10 text-4xl opacity-60"
      >
        🍜
      </motion.div>

      {/* Star */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 right-12 text-3xl opacity-60"
      >
        ⭐
      </motion.div>

      {/* Music Note */}
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-10 left-14 text-4xl opacity-60"
      >
        🎵
      </motion.div>

      {/* Trident */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-12 right-16 text-4xl opacity-60"
      >
        🔱
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
        className="max-w-4xl bg-white/90 backdrop-blur-xl shadow-xl 
                   rounded-3xl p-10 space-y-6 border border-gray-200 relative z-10"
      >
        <h2 className="text-4xl font-bold text-black">
          Life at Hostel 15
        </h2>

        <p className="text-lg leading-relaxed text-gray-800">
          Home to 800+ students, Trident is more than just a place to stay — 
          it’s a vibrant ecosystem full of energy, culture, and connection.
          With bright corridors, cozy spaces, and familiar faces everywhere,
          H15 becomes home way before you even realize it.
        </p>

        <p className="text-lg leading-relaxed text-gray-800">
          Whether it’s late-night maggi runs, spontaneous GC practice sessions,
          laughing till 3 AM with your wingmates, or the quiet comfort of
          studying together before exams — every corner of this hostel holds a
          memory. It’s where friendships grow, personalities evolve, and
          stories begin.
        </p>

        <p className="text-lg leading-relaxed text-gray-800">
          From cultural buzz to academic hustle, from peaceful mornings to 
          chaotic evenings, H15 has its own rhythm — one you instantly vibe
          with. This hostel isn’t just part of campus…{" "}
          <span className="text-purple-700 font-semibold">
            it is the heart of campus, IYKYK 😉
          </span>
        </p>

      </motion.div>
    </motion.section>
  );
};
