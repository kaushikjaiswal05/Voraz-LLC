import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://voraz-server.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }

    setLoading(false);
  };

  return (
    <section className="w-full px-6 md:px-12 mt-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between bg-white">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#1A0D36]"
        >
          Contact Us
        </motion.h2>

        <p className="text-gray-700 text-lg">
          We'd love to hear from you! Whether you're looking for staffing solutions, BPO services, or custom software development, our team is here to help.
        </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#8C4B23] text-2xl" />
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+1-786-544-2007</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#8C4B23] text-2xl" />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">chintan@thevoraz.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#8C4B23] text-2xl" />
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <p className="text-gray-600">5830 E 2nd St. Suite 8, Casper, WY 82609</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#8C4B23] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`text-center mt-4 ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
