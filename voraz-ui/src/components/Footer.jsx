import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full px-6 md:px-12 lg:px-20 py-10 bg-gradient-to-t from-[#e5d8f7] to-transparent text-gray-700 text-md">
            <hr className="py-5 px-5 opacity-10"/>
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left pb-10">

                {/* Copyright */}
                <p className="mb-4 md:mb-0">© 2024 The Voraz LLC. All rights reserved.</p>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <NavLink to="/services" className="hover:text-[#8C4B23] transition">Services</NavLink>
                    <NavLink to="/about" className="hover:text-[#8C4B23] transition">About</NavLink>
                    <NavLink to="/contact" className="hover:text-[#8C4B23] transition">Contact</NavLink>
                    <a href="https://www.linkedin.com/company/the-voraz/" className="hover:text-[#8C4B23] transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
