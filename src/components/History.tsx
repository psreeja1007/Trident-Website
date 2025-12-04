import { motion } from "framer-motion";

export const History = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 mt-[200px] relative bg-[radial-gradient(circle,_rgba(0,0,0,0.08)_1px,_transparent_1px)] bg-[size:12px_12px]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center ">
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-purple-800 leading-tight">
            History & Culture of Trident
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            {/* HISTORY PART */}
            <p>
              Hostel 15, fondly known as 
              <span className="font-semibold text-purple-700"> Trident</span>, 
              was established in the early 2000s to accommodate the growing student 
              population of IIT Bombay. Over the years, it has transformed from a 
              traditional boy’s hostel into a vibrant, inclusive home for 
              <span className="font-semibold text-purple-700"> second & third-year B.Tech girls </span>
              and 
              <span className="font-semibold text-purple-700"> freshie M.Tech girls</span>.
            </p>

            {/* CULTURE PART */}
            <p>
              Trident is not just a hostel — it’s a tradition, a vibe, and a community that
              celebrates togetherness. Throughout the year, H15 hosts numerous fun events
              that bring everyone closer.
            </p>

            <p>
              From cultural nights to hostel mixers and festive celebrations, we make sure
              every moment counts. We actively participate in Institute 
              <span className="font-semibold text-purple-700"> GCs</span>, cheering 
              loud and proud for Trident.
            </p>

            <p>
              And of course — our annual hostel fest, 
              <span className="font-semibold text-purple-700"> PANDORA</span>, held every spring semester, 
              is the heart of H15. A celebration of our people, our stories, and the 
              spirit that makes Trident truly unforgettable.
            </p>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
