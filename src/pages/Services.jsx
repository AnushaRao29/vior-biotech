import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Texts } from '../../src/constants/Texts';

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-screen flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          <div className="w-full mx-auto  bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              {Texts.services.title}
            </h2>
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
              {Texts.services.fatTitle}
            </h2>
            <p className="text-lg mb-4">{Texts.services.fatBody}</p>
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
              {Texts.services.satTitle}
            </h2>
            <p className="text-lg mb-4">{Texts.services.satBody}</p>
            <ul className="list-disc list-outside list-inside list-inside space-y-2 mb-4 pl-5">
              {Texts.services.satPoints.map((point, index) => (
                <li className="text-lg mb-4" key={index}>
                  {point}
                </li>
              ))}
            </ul>
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
              {Texts.services.handoverTitle}
            </h2>
            <p className="text-lg mb-4">{Texts.services.handoverBody}</p>
          </div>
        </div>
      </div>
    </>
  );
};
