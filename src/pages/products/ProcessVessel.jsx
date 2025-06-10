import React from 'react';
import { useEffect } from 'react';
import image from '../../assets/products-bioreactor.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Texts } from '../../constants/Texts';

export const ProcessVessel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={image}
              alt="Vior Biotech Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Card Overlapping */}
          <div className="w-full md:w-3/4 md:-ml-20 md:-mt-[-100px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              {Texts.products.processvessel.title}
            </h2>

            <p className="text-lg mb-4">{Texts.products.processvessel.body}</p>
            <ul className="list-disc list-outside list-inside  space-y-2">
              {Texts.products.processvessel.points.map((point, index) => (
                <li className="text-lg mb-4" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
