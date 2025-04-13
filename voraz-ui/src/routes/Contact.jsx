import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-20 space-y-12">
      {/* Contact Info */}
      <div className="text-center pt-4 ">
       <h1 className="text-3xl font-semibold text-[#1A0D36]">Contact Details</h1>
       <p className="text-5xl font-light text-gray-600 py-2">You can reach us at the following</p>
       </div>
      <div className="grid md:grid-cols-3 gap-8 text-gray-700">
        <div className="flex flex-col items-center gap-4">
          <FaPhoneAlt className="text-green-700 text-3xl" />
          <div className="text-center">
            <p className="font-semibold">Phone</p>
            <p className="text-sm">+1-786-544-2007</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaEnvelope className="text-indigo-700 text-3xl" />
          <div className="text-center">
            <p className="font-semibold">Email</p>
            <p className="text-sm">chintan@thevoraz.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <FaMapMarkerAlt className="text-red-700 text-3xl" />
          <div className="text-center">
            <p className="font-semibold">Address</p>
            <p className="text-sm">9575 112th ST FL 2S S Richmond HL, NY 11419</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left*/}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Let's talk about everything!
            </h2>
            <p className="text-gray-600">
            Got questions or ideas? We’re here to help with staffing, BPO, or software solutions.
            </p>
          </motion.div>

          <img
            src="/images/contact-illustration.svg"
            alt="Contact Illustration"
            className="md:block w-80 h-100 m-auto"
          />
        </div>

        {/* Right */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-5 pt-8"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-sm focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-sm focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-sm focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows="4"
            required
            className="w-full p-3 border border-gray-300 bg-gray-100 rounded-sm focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition w-full font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className={`text-center ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
