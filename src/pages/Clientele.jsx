import React from 'react';
import { useEffect } from 'react';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.jpg';
import client7 from '../assets/client7.jpg';
import client8 from '../assets/client8.jpg';
import client9 from '../assets/client9.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const clientele = [
  { name: 'Client 1', logo: client1 },
  { name: 'Client 2', logo: client2 },
  { name: 'Client 3', logo: client3 },
  { name: 'Client 4', logo: client4 },
  { name: 'Client 5', logo: client5 },
  { name: 'Client 6', logo: client6 },
  { name: 'Client 7', logo: client7 },
  { name: 'Client 8', logo: client8 },
  { name: 'Client 9', logo: client9 },
];

export const Clientele = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div
        className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
        data-aos="fade-up"
      >
        {/* Text Card Overlapping */}
        <div className="w-full mx-auto  bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
          <h2 className="text-center text-3xl md:text-4xl text-white mb-10">
            Our Clientele
          </h2>
          <p className="text-lg mb-10">
            At <strong>VIOR</strong>, we are committed each day to delivering
            impactful solutions that truly make a difference to our
            customers—leading niche biopharmaceutical companies and government
            organizations that play a vital role in the lifesaving industry.
            Every effort we make is driven by the potential to create meaningful
            value for our clients, helping us advance our mission and contribute
            to a greater cause.
          </p>

          <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-12 gap-y-4">
            {clientele.map((client, index) => (
              <div key={index} className="w-1/3 flex justify-center px-2 p-1">
                <div className="bg-gray-50 hover:bg-white hover:shadow-[0_0_30px_#4f46e5] rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center w-full max-w-[16rem] h-[8rem]">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
