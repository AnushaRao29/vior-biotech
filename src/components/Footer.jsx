import React from 'react';
import { ChevronUpIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { TEXTS, LINKS } from '../constants';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-sm mt-16 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-5 h-5" />
      </button>

      {/* Main Footer */}
      <div className="bg-gray-800 text-white max-w-8xl mx-auto px-4 py-10 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-base">
          {/* Left Side: Company Info */}
          <div className="text-left space-y-2">
            <p className="font-semibold">{TEXTS.COMPANY_NAME}</p>
            <p>{TEXTS.COMPANY_ADDR}</p>
            <p>{TEXTS.COMPANY_PHONE}</p>
            <p className="text-gray-400">{TEXTS.FOOTER_TEXT}</p>
          </div>

          {/* Right Side: Links */}
          <div className="text-right space-y-2 text-gray-400">
            <p>
              <a href="#" className="hover:underline">
                {TEXTS.PRIVACY_POLICY}
              </a>
            </p>
            <p>
              <a href="#" className="hover:underline">
                {TEXTS.TERMS_OF_USE}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Bar */}
      <div className="bg-gray-800 text-white py-4 border-t border-gray-700">
        <div className="max-w-8xl mx-auto px-4 flex gap-8 text-white">
          {/* Email */}
          <a
            href={LINKS.MAIL}
            aria-label="E-mail"
            className="hover:text-yellow-400 transition"
          >
            <EnvelopeIcon className="w-6 h-6" />
          </a>
          {/* WhatsApp */}
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
