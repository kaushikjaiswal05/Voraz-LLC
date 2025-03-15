import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenuOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeMenuOnOutsideClick);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo-voraz.jpg" alt="logo" className="w-30 h-12 md:w-30 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link className="hover:text-[#8C4B23] transition" to="/">Home</Link></li>
          <li><Link className="hover:text-[#8C4B23] transition" to="/services">Services</Link></li>
          <li><Link className="hover:text-[#8C4B23] transition" to="/about">About</Link></li>
          <li><Link className="hover:text-[#8C4B23] transition" to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#8C4B23]" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-[#FCFAF6] shadow-lg flex flex-col p-6 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo-voraz.jpg" alt="logo" className="w-30 h-12 md:w-30 md:h-12" />
          </Link>
          <button 
            className="text-[#8C4B23]" 
            onClick={() => setMenuOpen(false)}
          >
            <FiX size={32} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start space-y-6 mt-8">
          <Link className="text-lg text-[#1A0D36] font-medium" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="text-lg text-[#1A0D36] font-medium" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link className="text-lg text-[#1A0D36] font-medium" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="text-lg text-[#1A0D36] font-medium" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
