import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import viorLogo from '../../src/assets/vior-logo.png';
import { ChevronDown } from 'lucide-react';
import { NavItems } from '../Data/NavItems';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setActiveSubmenu(null); // reset submenu state on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="p-4 md:p-8 flex items-center justify-between h-20 transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={viorLogo}
            alt="vior-logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base font-medium relative transition-colors duration-300 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          {NavItems.map(item => (
            <div
              key={item.name}
              className="relative group"
              onMouseOver={() => setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer px-2 py-2">
                <Link
                  to={item.path}
                  className="transition duration-200 flex items-center"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 ${scrolled ? 'text-black' : 'text-white'} mt-0.5`}
                  />
                )}
              </div>

              {/* Submenu */}
              {item.submenu && (
                <div
                  className={`absolute left-0 top-full mt-1 min-w-48 z-50 border border-gray-400 rounded-md shadow-lg transition-all duration-200 ease-in-out
          bg-[rgba(128,128,128,0.4)] backdrop-blur-md text-white ${
            activeSubmenu === item.name
              ? 'opacity-100 visible pointer-events-auto'
              : 'opacity-0 invisible pointer-events-none'
          }`}
                >
                  <ul className="py-2">
                    {item.submenu.map(subItem => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          onClick={() => setActiveSubmenu(null)}
                          className="block px-4 py-2 text-sm text-white hover:bg-black hover:[text-shadow:_0_0_6px_white] transition-all duration-300 whitespace-nowrap rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden ${scrolled ? 'text-black' : 'text-white'} drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]`}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[rgba(128,128,128,0.4)] backdrop-blur-md border border-gray-400 text-white rounded-l-2xl shadow-md p-4 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3">
          {NavItems.map(item => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="block w-full px-4 py-2 rounded-xl text-base text-white hover:bg-black hover:text-white hover:[text-shadow:_0_0_6px_white] focus:bg-black focus:text-white focus:[text-shadow:_0_0_8px_white] transition-all duration-300 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div className="pl-6 mt-2 space-y-2">
                  {item.submenu.map(subItem => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block w-full px-3 py-1.5 rounded-lg text-sm text-white hover:bg-black hover:text-white hover:[text-shadow:_0_0_6px_white] transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};
