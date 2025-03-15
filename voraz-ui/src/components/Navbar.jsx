import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="flex items-center space-x-2">
          <img src="/images/logo-voraz.jpg" alt="logo" className="w-30 h-12 md:w-30 md:h-12" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "Services", "About", "Contact"].map((page) => (
            <li key={page}>
              <NavLink
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-[#8C4B23] font-semibold" : "hover:text-[#8C4B23]"}`
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
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
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/images/logo-voraz.jpg" alt="logo" className="w-30 h-12 md:w-30 md:h-12" />
          </NavLink>
          <button 
            className="text-[#8C4B23]" 
            onClick={() => setMenuOpen(false)}
          >
            <FiX size={32} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-start space-y-6 mt-8">
          {["Home", "Services", "About", "Contact"].map((page) => (
            <NavLink
              key={page}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "text-[#8C4B23]" : "text-[#1A0D36]"}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {page}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
