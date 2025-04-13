import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      title: "Recruitment Process Outsourcing (RPO)",
      description:
        "We streamline hiring, reduce costs, and secure top-tier talent for your company. Our dedicated offshore recruiters and AI-powered hiring solutions help businesses hire faster and smarter.",
      details: [
        "Dedicated Offshore Recruiters – Experts working exclusively for you",
        "AI & GenAI-Powered Recruitment – Smarter hiring with advanced sourcing tools",
        "Industry-Specific Talent Acquisition – Technology, BFSI, Marketing, Aerospace & more",
        "900+ professionals placed in Fortune 500 firms",
      ],
      image: "/images/rpo-img.jpg",
    },
    {
      title: "IT Outsourcing & Consulting",
      description:
        "Providing skilled IT professionals for seamless project execution and cost savings. Whether you need short-term talent or long-term IT solutions, our flexible engagement models cater to your needs.",
      details: [
        "IT Staff Augmentation – Contract, contract-to-hire, and full-time professionals",
        "Offshore IT Talent – Software developers, QA testers, cloud engineers & more",
        "Proven Success – Consultants placed at IBM, Birlasoft, and other top firms",
        "Flexible workforce solutions for projects of all sizes",
      ],
      image: "/images/staffing-img.jpg",
    },
    {
      title: "Software Development",
      description:
        "We build scalable, secure, and high-performing software tailored to your business. Our team specializes in web, mobile, and enterprise applications that drive efficiency and growth.",
      details: [
        "Web & Mobile App Development – Scalable applications for businesses",
        "Enterprise Software Solutions – Custom-built platforms for workflow automation",
        "Cloud & AI-Powered Applications – Advanced solutions leveraging modern tech",
        "Full-cycle development: From ideation to deployment and maintenance",
      ],
      image: "/images/software-dev.jpg",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-bold text-[#1A0D36] text-center mb-16"
      >
        Our Services
        <p className="text-2xl lg:text-3xl text-gray-600 font-light py-4 mb-8">We offer a broad spectrum of services designed to help your business grow and thrive. Whether you need expert staffing, process outsourcing, or software development, our team is dedicated to providing flexible, scalable solutions.</p>
      </motion.h2>

      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className={`flex flex-col lg:flex-row items-center gap-4 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } space-y-12 lg:space-y-0 lg:space-x-16 mb-24`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full lg:w-[40%] h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="w-full lg:w-[55%] space-y-6">
            <h3 className="text-3xl font-bold text-[#1A0D36]">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

      <div className="text-center font-mediummt-24">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-[#332A3D]"
        >
          Need Customized Solutions?
        </motion.h3>
        <p className="text-gray-700 mt-3 text-lg">
          Connect with us today and let’s discuss how we can help your business succeed.
        </p>
        <button className="mt-8 bg-[#332A3D] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition text-lg">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default Services;
