import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Texts } from '../constants/Texts';
import image1 from '../assets/vior-gallery-1.jpg';
import image2 from '../assets/vior-gallery-2.jpg';
import image3 from '../assets/vior-gallery-3.jpg';
import image4 from '../assets/vior-gallery-4.jpg';
import image5 from '../assets/vior-gallery-5.jpg';
import image6 from '../assets/vior-gallery-6.jpg';
import image7 from '../assets/vior-gallery-7.jpg';
import image8 from '../assets/vior-gallery-8.jpg';
import image9 from '../assets/vior-gallery-9.jpg';
import image10 from '../assets/vior-gallery-10.jpg';
import image11 from '../assets/vior-gallery-11.jpg';
import image12 from '../assets/vior-gallery-12.jpg';

const galleryImages = [
  { name: 'Gallery 1', logo: image1 },
  { name: 'Gallery 2', logo: image2 },
  { name: 'Gallery 3', logo: image3 },
  { name: 'Gallery 4', logo: image4 },
  { name: 'Gallery 5', logo: image5 },
  { name: 'Gallery 6', logo: image6 },
  { name: 'Gallery 7', logo: image7 },
  { name: 'Gallery 8', logo: image8 },
  { name: 'Gallery 9', logo: image9 },
  { name: 'Gallery 10', logo: image10 },
  { name: 'Gallery 11', logo: image11 },
  { name: 'Gallery 12', logo: image12 },
];

export const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-center text-3xl md:text-4xl mb-10">
          {Texts.gallery.title}
        </h2>

        {/* Masonry grid layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((gallery, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={gallery.logo}
                alt={gallery.name}
                className="w-full h-auto object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
