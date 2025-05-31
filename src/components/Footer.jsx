import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-16">
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-light transition duration-300"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>

      <p>
        © May 2023 VIOR BIOTECH EQUIPMENT PRIVATE LIMITED. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
