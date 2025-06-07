import React from 'react';
import { useEffect } from 'react';
import image1 from '../assets/vior-gallery-16.jpg';
import image2 from '../assets/vior-gallery-14.jpg';
import image4 from '../assets/vior-gallery-4.jpg';
import image5 from '../assets/vior-gallery-5.jpg';
import image7 from '../assets/vior-gallery-7.jpg';
import image8 from '../assets/vior-gallery-8.jpg';
import image9 from '../assets/vior-gallery-9.jpg';
import image10 from '../assets/vior-gallery-10.jpg';
import image11 from '../assets/vior-gallery-11.jpg';
import image12 from '../assets/vior-gallery-12.jpg';
import image13 from '../assets/vior-gallery-13.jpg';
import image14 from '../assets/vior-gallery-2.jpg';
import image15 from '../assets/vior-gallery-15.jpg';
import image16 from '../assets/vior-gallery-1.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const clientele = [
  { name: 'Client 1', logo: image1 },
  { name: 'Client 15', logo: image15 },
  { name: 'Client 2', logo: image2 },
  { name: 'Client 13', logo: image13 },
  { name: 'Client 4', logo: image4 },
  { name: 'Client 5', logo: image5 },
  { name: 'Client 7', logo: image7 },
  { name: 'Client 8', logo: image8 },
  { name: 'Client 9', logo: image9 },
  { name: 'Client 10', logo: image10 },
  { name: 'Client 11', logo: image11 },
  { name: 'Client 12', logo: image12 },
  { name: 'Client 14', logo: image14 },
  { name: 'Client 16', logo: image16 },
];

export const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div
        className="w-full py-6 bg-gradient-to-b bg-blue-50 transition duration-300"
        data-aos="fade-up"
      >
        <h2 className="text-center text-3xl md:text-4xl text-white mb-10">
          Gallery
        </h2>

        <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-12 gap-6">
          {clientele.map((client, index) => (
            <div key={index} className="w-1/3 flex justify-center">
              <div className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md flex items-center justify-center p-2">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
