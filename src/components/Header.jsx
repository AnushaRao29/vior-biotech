import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install lucide-react or replace with other icons
import viorLogo from '../../src/assets/vior-logo.png';
import { ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: 'About Us',
      submenu: [
        { name: 'Overview', path: '/about' },
        { name: 'Mission & Vision', path: '/about/mission' },
        { name: 'Leadership', path: '/about/leadership' },
      ],
    },
    {
      name: 'Products',
      submenu: [
        { name: 'Bioreactors', path: '/products/bioreactors' },
        { name: 'Fermenters', path: '/products/fermenters' },
        { name: 'Vaporization Vessel', path: '/products/vaporization-vessel' },
        { name: 'Process Vessel', path: '/products/process-vessel' },
        { name: 'Mobile Vessel', path: '/products/mobile-vessel' },
        { name: 'Buffer Vessel', path: '/products/buffer-vessel' },
        { name: 'Harvest Vessel', path: '/products/harvest-vessel' },
        { name: 'Media Vessel', path: '/products/media-vessel' },
        { name: 'CIP/SIP Skids', path: '/products/cip-sip-skids' },
        { name: 'Filtration Skids', path: '/products/filtration-skids' },
        { name: 'CIP Stations', path: '/products/cip-stations' },
        { name: 'Inactivation Vessel', path: '/products/inactivation-vessel' },
        { name: 'Mixing Tanks', path: '/products/mixing-tanks' },
        {
          name: 'Automation Solutions',
          path: '/products/automation-solutions',
        },
      ],
    },
    { name: 'Clientele', path: '/clientele' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col leading-tight">
              <span className="text-green-700 font-bold text-lg sm:text-xl">
                <img
                  src={viorLogo}
                  alt="vior-logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base font-medium text-gray-700 relative">
          {navItems.map(item => (
            <div key={item.name} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer px-2 py-2">
                <Link
                  to={item.path}
                  className="hover:text-green-700 transition duration-200 flex items-center"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ChevronDown className="w-4 h-4 text-gray-500 mt-0.5" />
                )}
              </div>

              {item.submenu && (
                <div className="absolute left-0 top-full mt-1 min-w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-auto">
                  <ul className="py-2">
                    {item.submenu.map(subItem => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
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
          className="md:hidden text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg"></span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-gray-700">
          {navItems.map(item => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="block font-medium hover:text-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="pl-4 mt-2 space-y-2">
                  {item.submenu.map(subItem => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block text-sm text-gray-600 hover:text-primary-dark"
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
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};
