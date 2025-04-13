import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import "./home.css"

const servicesData = [
  {
    title: "Recruitment Process Outsourcing (RPO) & Staffing Solutions",
    description:
      "We offer end-to-end talent acquisition services, helping companies streamline hiring, reduce recruitment costs, and secure top-tier candidates.",
    points: [
      "✔ Dedicated Offshore Recruiters – Experts working exclusively for you",
      "✔ AI & GenAI-Powered Recruitment – Smarter hiring with advanced sourcing tools",
      "✔ High-Volume & Niche Hiring Expertise – Scalable solutions for any business",
      "✔ Industry-Specific Talent Acquisition – Technology, BFSI, Marketing, Aerospace & more",
    ],
    buttonText: "Learn More",
    image: "/images/rpo-img.jpg",
  },
  {
    title: "IT Outsourcing & Consulting",
    description:
      "We provide on-demand IT resources and consulting services to help businesses execute projects seamlessly while optimizing costs.",
    points: [
      "✔ IT Staff Augmentation – Contract, contract-to-hire, and full-time IT professionals",
      "✔ Offshore IT Talent – Software developers, QA testers, cloud engineers & more",
      "✔ Flexible Engagement Models – Scalable workforce solutions for every project",
      "✔ Proven Success – Consultants placed at IBM, Birlasoft, and other top firms",
    ],
    buttonText: "Explore IT Solutions",
    image: "/images/staffing-img.jpg",
  },
  {
    title: "Software Development",
    description:
      "We build custom software solutions tailored to meet your business needs, ensuring scalability, security, and performance.",
    points: [
      "✔ Web & Mobile App Development – Scalable applications for businesses",
      "✔ Enterprise Software Solutions – Custom-built platforms for workflow automation",
      "✔ Cloud & AI-Powered Applications – Advanced solutions leveraging modern tech",
      "✔ End-to-End Development – From ideation to deployment and maintenance",
    ],
    buttonText: "Start Your Project",
    image: "/images/software-dev.jpg",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-22 overflow-hidden gradient">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-8 px-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1B0030] leading-tight text-center lg:text-left"
          >
            Empowering Businesses <br /> with Smart Hiring & <br /> Cutting-Edge IT Solutions
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center px-2 space-x-5 lg:flex-row md:flex-row flex-col justify-center gap-2"
          >
            <NavLink
              to="/services"
              className="flex-1 bg-[#1A0D36] text-center text-white py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-[#1A0D36] hover:border-2 hover:border-[#1A0D36] transition cta-btn"
            >
              Explore <VscArrowSmallRight style={{ display: "inline-block" }} />
            </NavLink>
            <p className="flex-1 text-[#1A0D36] text-md font-semibold text-center">
              Looking for skilled IT professionals or recruitment experts? Let’s connect!
            </p>
          </motion.div>
        </div>

        {/* Right Section*/}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 z-10">

          {/* Background Design */}
          <div className="absolute right-0 bottom-10 w-full h-full lg:block">
            <img src="/images/bg.svg" alt="background design" className="w-full h-auto svg-img" />
          </div>

          {/* Main Image */}
          <motion.img
            src="/images/hero-bg.jpg"
            alt="AI Scientist"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg shadow-lg w-75 h-100 relative z-10 hero-img"
          />

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-10 left-0 md:top-5 md:left-20 bg-white shadow-2xl p-4 md:p-5 rounded-3xl flex flex-col items-center justify-center w-35 h-30 md:w-45 md:h-40 text-center z-10 sm:top-8 sm:left-20 floating-stat1"
          >
            {/* Avatar Images */}
            <div className="absolute top-2.5 left-8 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md avatar-1">
              <img src="/images/avatar1.jpg" alt="Avatar 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-4 left-5 w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-md avatar-2">
              <img src="/images/avatar2.jpg" alt="Avatar 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-19.5 right-3.5 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md avatar-3">
              <img src="/images/avatar3.jpg" alt="Avatar 3" className="w-full h-full object-cover" />
            </div>

            {/* Stat Content */}
            <p className="text-2xl md:text-4xl font-bold text-[#380b58]">9+ Years</p>
            <p className="text-xs md:text-xs text-gray-500">Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-3 left-0 md:bottom-2 md:left-30 bg-white shadow-xl p-4 md:p-5 rounded-3xl flex flex-col justify-center items-center w-28 h-24 md:w-30 md:h-30 text-center sm:left-25 sm:bottom-10 z-11 floating-stat2"
          >
            <p className="text-2xl md:text-4xl font-bold text-[#380b58]">900+</p>
            <p className="text-xs md:text-xs text-gray-500">Placements</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-12 right-0 md:bottom-20 md:right-20 w-40 h-35 md:w-40 md:h-40 bg-gradient-to-r from-[#35015d] to-[#160a29] text-white shadow-xl p-4 md:p-5 rounded-3xl flex flex-col justify-center items-center text-center sm:right-20 sm:bottom-10 z-12 floating-stat3"
          >
            <p className="text-2xl md:text-4xl font-bold">Fortune 500</p>
            <p className="text-xs md:text-xs text-purple-200">Clients</p>
          </motion.div>
        </div>
      </section>

      <div className="middle-divider"></div>

      {/* About Section */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between bg-white">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6 pr-8 about-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1A0D36]"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            The Voraz LLC is a U.S.-based technology and recruitment solutions provider with a mission to help businesses succeed by offering cost-effective, high-quality IT outsourcing, RPO, and software development services.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            With over <span className="text-[#1B0030] font-semibold">9 years</span> of industry experience, we have built a reputation for delivering skilled professionals, innovative technology solutions, and strategic recruitment support to companies across technology, marketing, manufacturing, aerospace, and BFSI industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center space-x-4 bg-gradient-to-b from-[#1B0030] to-[#3b1f5b] p-4 rounded-lg shadow-md"
          >
            <FaAward className="text-white text-4xl" />
            <div>
              <p className="text-white text-2xl font-bold">Commitment to Excellence</p>
              <p className="text-purple-200 text-sm">We provide the right people, technology, and solutions to help businesses thrive.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          {/* Main Image */}
          <motion.img
            src="/images/about-img.jpg"
            alt="About Voraz"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg shadow-lg w-full h-full relative z-10"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 text-center bg-white">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#1A0D36] mb-12"
        >
          Our Services
          <p className="text-3xl md:text-5xl text-gray-600 font-light py-4 ">Broad Spectrum of Services to Grow Your Business</p>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-between text-left service-card"
            >
              {/* Service Image */}
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg card-img" loading="lazy"/>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-[#1A0D36]">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700 mt-3">{service.description}</p>

              {/* Bullet Points */}
              <ul className="text-gray-600 mt-3 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="text-sm">{point}</li>
                ))}
              </ul>

              {/* Call-to-Action Button */}
              <NavLink
                to="/contact"
                className="mt-5 bg-gradient-to-b from-[#1B0030] via-[#270a3e] to-[#3b1f5b]  text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition mb-4 hover:scale-105"
              >
                {service.buttonText}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose us section */}
      <section className="w-full px-6 md:px-12 lg:px-10 py-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-gradient-to-b from-[#1B0030] to-[#3b1f5b] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between py-6 px-8 md:px-12 shadow-lg"
        >
          {/* Text Content */}
          <div className="text-center md:text-left py-4">
            <h2 className="text-lg md:text-2xl font-semibold">
              Why Choose The Voraz LLC?
            </h2>
            <ul className="mt-3 text-sm md:text-base text-white opacity-90 leading-relaxed space-y-2">
              <li>✔ Proven Track Record – 900+ successful placements & 9+ years of industry experience</li>
              <li>✔ Cost-Effective Solutions – High-quality IT & recruitment services at optimized costs</li>
              <li>✔ Industry Expertise – Trusted by Fortune 500 & fast-growing companies</li>
              <li>✔ AI-Driven Hiring & Tech Solutions – Smarter, faster, and more effective hiring & IT strategies</li>
              <li>✔ Scalable Engagement Models – Flexible services that grow with your business</li>
            </ul>
          </div>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="mt-4 md:mt-0 bg-white text-[#1B0030] px-6 py-4 rounded-full font-semibold text-sm md:text-base hover:bg-opacity-90 transition hover:scale-105"
          >
            Schedule a Consultation
          </NavLink>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
