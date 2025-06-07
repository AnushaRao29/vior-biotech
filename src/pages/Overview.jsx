import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Overview = () => {
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
          {/* Text Card Overlapping */}
          <div className="w-3/4 mx-auto  bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              Overview
            </h2>

            <p className="text-lg mb-10">
              <strong>Vior Biotech</strong> established in 2023, we specialize
              in the design, fabrication, and supply of high-quality process
              equipment for the Biopharma, Pharmaceutical, Food, and Chemical
              industries—serving clients nationwide and globally.
            </p>
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              Sister Company
            </h2>
            <p className="text-lg mb-10">
              <strong>Sparkon Engineers</strong> has about 35 years’ experience
              in manufacturing of Pressure vessels, Storage tanks, Silos, Heat
              Exchangers for Chemical, Pharmaceutical, Food, Oil & Gas
              Industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
