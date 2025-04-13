import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 mt-5 bg-white">
      {/* Hero Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-[#1A0D36] text-center mb-12"
      >
        About The Voraz LLC
      </motion.h2>

      <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold">Empowering Businesses with Smart Hiring & Cutting-Edge IT Solutions</span>.  
          At The Voraz LLC, we specialize in IT Outsourcing & Consulting, Recruitment Process Outsourcing (RPO) & Staffing Solutions, 
          and Software Development, helping businesses scale efficiently with top-tier talent and innovative technology solutions.  
          With a strong global presence and a track record of success, we are your trusted partner in workforce and technology solutions.
        </p>
      </div>

      {/* Company Overview */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 py-5 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-[#241E29]">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed">
            The Voraz LLC is a U.S.-based technology and recruitment solutions provider with a mission to help businesses succeed by 
            offering cost-effective, high-quality IT outsourcing, RPO, and software development services. With over <span className="font-semibold">9 years</span> 
            of industry experience, we have successfully delivered skilled professionals and cutting-edge technology solutions to companies in 
            Technology, Marketing, Manufacturing, Aerospace, and BFSI industries.
          </p>
        </motion.div>
        <motion.img
          src="/images/aboutus-img.jpg"
          alt="About Us"
          loading="lazy"
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-[#1A0D36] mb-10"
        >
          Why Choose The Voraz LLC?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Proven Track Record", text: "900+ successful placements & 9+ years of industry experience." },
            { title: "Cost-Effective Solutions", text: "High-quality IT & recruitment services at optimized costs." },
            { title: "Trusted by Fortune 500", text: "Our clients include Microsoft, Google, IBM, Cisco, and more." },
            { title: "AI-Driven Hiring", text: "Smarter, faster, and more effective hiring strategies with AI." },
            { title: "Scalable Engagement", text: "Flexible services that grow with your business needs." },
            { title: "Industry Expertise", text: "Deep expertise in Tech, Aerospace, BFSI, and Marketing industries." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gradient-to-b from-[#332A3C] to-[#493A57] p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h4 className="text-2xl font-semibold text-white">{feature.title}</h4>
              <p className="text-purple-200 mt-3">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-[#1A0D36] mb-10"
        >
          Our Global Reach
        </motion.h3>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <motion.img
            src="/images/global.jpg"
            alt="Global Reach"
            loading="lazy"
            className="w-full lg:w-1/2 h-auto object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With a strong **international footprint**, The Voraz LLC serves clients across multiple regions, 
              ensuring top-notch recruitment and IT solutions for businesses worldwide.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-semibold">United States:</span> Providing IT & staffing solutions across various industries.</li>
              <li><span className="font-semibold">India:</span> Offshore talent hubs for cost-efficient tech & recruitment services.</li>
              <li><span className="font-semibold">Europe & Canada:</span> Expanding our footprint to bring tailored solutions worldwide.</li>
            </ul>
          </div>
        </div>
      </div>

  
      <div className="text-center mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-[#1A0D36]"
        >
          Let’s Build Something Great Together
        </motion.h3>
        <p className="text-gray-700 mt-3 text-lg mb-8">
          Get in touch with us to explore how we can collaborate.
        </p>
        <NavLink to="/contact" className="mt-8 bg-[#332A3D] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition text-lg sm:mt-10">
          Contact Us
        </NavLink>
      </div>
    </section>
  );
};

export default About;
