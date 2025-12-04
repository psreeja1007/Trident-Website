import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const PersonCard = ({ person }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-purple-100/60 border border-purple-200 shadow-md rounded-3xl 
                 p-4 flex flex-col items-center text-center w-[250px]"
    >
      <img
        src={`${process.env.PUBLIC_URL}/${person.image_path}`}
        alt={person.name}
        className="w-36 h-36 rounded-full object-cover border-2 border-purple-300 shadow-sm"
      />

      <h2 className="mt-3 text-lg font-semibold text-purple-800 truncate">
        {person.name}
      </h2>

      <p className="text-sm text-purple-600 font-medium truncate">
        {person.designation}
      </p>

      <div className="flex gap-4 mt-3">
        {/* Email only if present */}
        {person.email && (
          <motion.a
            href={`mailto:${person.email}`}
            whileHover={{ scale: 1.15 }}
            className="text-purple-700 hover:text-purple-900"
          >
            <Mail size={22} />
          </motion.a>
        )}

        {/* LinkedIn only if present */}
        {person.linkedin && (
          <motion.a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-purple-700 hover:text-purple-900"
          >
            <Linkedin size={22} />
          </motion.a>
        )}
      </div>

    </motion.div>
  );
};
