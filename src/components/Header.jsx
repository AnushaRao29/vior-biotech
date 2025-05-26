import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or replace with other icons
import viorLogo from "../../src/assets/vior-logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "R&D", path: "/rnd" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center space-x-2">
           
            <div className="flex flex-col leading-tight">
              <span className="text-green-700 font-bold text-lg sm:text-xl">
                 <img
              src={viorLogo}
              alt="vior-logo"
              className="h-10 w-auto object-contain"
            />
              </span>
              <span className="italic text-green-700 text-xs sm:text-sm tracking-wide">
                Turning vision into Value
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-sm md:text-base font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-heading hover:text-primary-dark transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-primary-dark"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
