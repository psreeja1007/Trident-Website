import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const confirmSubmit = window.confirm("Are you sure you want to submit?");
    if (confirmSubmit) {
      setSubmitted(true);
      e.target.reset();  // Uncomment if you want to clear form
    }
  };

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-bold text-purple-800">Contact Us</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Have a question or suggestion? We’d love to hear from you.
        </p>
      </motion.div>

      {/* Form + Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg border border-purple-200 p-8 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            Send a Message
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Complaint Type Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Type of Complaint
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="mess">Mess</option>
              <option value="maintenance">Maintenance</option>
              <option value="sports">Sports</option>
              <option value="lan">LAN</option>
              <option value="general">General</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-md hover:bg-purple-700 transition"
          >
            Submit
          </motion.button>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-purple-600 mt-4 font-medium text-center"
            >
              Submitted successfully!
            </motion.p>
          )}
        </motion.form>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-purple-200"
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.313522945984!2d72.91145527572415!3d19.13774868207965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b809043e7afd%3A0xf9155b23e1df549a!2sHostel%2015%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1764615925347!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* IMPORTANT LINKS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">
          Quick Links
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          
          {/* Link 1 */}
          <a
            href="https://support.iitb.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white border border-purple-300 text-purple-700 text-center rounded-xl font-semibold shadow hover:bg-purple-50 transition w-full sm:w-auto"
          >
            IITB Complaint Maintenance Portal
          </a>

          {/* Link 2 */}
          <a
            href="http://www.iitb.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white border border-purple-300 text-purple-700 text-center rounded-xl font-semibold shadow hover:bg-purple-50 transition w-full sm:w-auto"
          >
            IITB Official Website
          </a>

          {/* Link 3 */}
          <a
            href="https://gymkhana.iitb.ac.in/hostels/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white border border-purple-300 text-purple-700 text-center rounded-xl font-semibold shadow hover:bg-purple-50 transition w-full sm:w-auto"
          >
            Hostel Affairs
          </a>

          {/* Link 4 */}
          <a
            href="https://gymkhana.iitb.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white border border-purple-300 text-purple-700 text-center rounded-xl font-semibold shadow hover:bg-purple-50 transition w-full sm:w-auto"
          >
            Gymkhana Website
          </a>

          {/* Link 5 */}
          <a
            href="https://gymkhana.iitb.ac.in/~ugacademics/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white border border-purple-300 text-purple-700 text-center rounded-xl font-semibold shadow hover:bg-purple-50 transition w-full sm:w-auto"
          >
            UG Academics
          </a>

        </div>
      </motion.div>


    </div>
  );
};
