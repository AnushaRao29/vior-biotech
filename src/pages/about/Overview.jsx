import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SEO } from '../../components/SEO';
import { Texts } from '../../constants/Texts';

export const Overview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SEO
        title="Overview | Vior Biotech"
        description="Vior handles Design, Operation, Control and Optimization of Process, Customised Design"
      />
      <div className="min-h-screen flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          <div className="w-3/4 mx-auto  bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              {Texts.overview.title1}
            </h2>

            <p className="text-lg mb-10">{Texts.overview.body1}</p>
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              {Texts.overview.title2}
            </h2>
            <p className="text-lg mb-10">{Texts.overview.body2}</p>
          </div>
        </div>
      </div>
    </>
  );
};
