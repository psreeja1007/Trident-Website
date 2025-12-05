import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Facilities", "Events", "Blog", "Council", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Group */}
        <motion.div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.06 }}>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/trident-logo.png`}
                alt="Secondary Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.06 }}>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/trident.png`}
                alt="Trident Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Nav Links */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium transition-all duration-300 ${
            isHome
              ? scrolled
                ? "text-gray-800"
                : "text-white"
              : "text-black"
          }`}
        >
          {navLinks.map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.06 }}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-purple-700 transition"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-purple-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-xl px-6 py-4 flex flex-col gap-4 text-purple-900"
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 text-lg font-medium hover:text-purple-700"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};