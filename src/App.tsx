import React from "react";
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Council } from "./pages/Council";
import {Events} from "./pages/Events";
import { Blog } from "./pages/Blog";
import { BlogDetails } from "./components/BlogDetails";
import { Contact } from "./pages/Contact";
import { Facilities } from "./pages/Facilities";
import { ScrollToTop } from "./components/ScrollToTop";
import { Gallery } from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop/>
      <Navbar />
      <main className="flex-1 bg-surface min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
