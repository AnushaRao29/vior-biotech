import React from 'react';
import { useEffect } from 'react';
import overview from '../../assets/vior-img-14.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Leadership = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen px-4 pt-24 pb-20 bg-gray-100"
      style={{
        backgroundImage: `url(${overview})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Text Card */}
      <div
        className="relative z-10 max-w-4xl w-full mx-auto bg-white bg-opacity-70 rounded-2xl shadow-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h2 className=" text-3xl font-bold  mb-6">
          Founder & CEO : Mr. Raju Rupnar
        </h2>
        <p className="text-lg mb-10">
          Mr. R. A. Rupnar, has been the Founder and Chief Executive Officer of
          VIOR Biotech Equipment Private Limited & Sparkon Engineers and has
          about 35 years’ experience in manufacturing of Pressure vessels,
          Storage tanks, Silos, Heat Exchangers for Chemical, Pharmaceutical,
          Food, Oil & Gas Industries. He has led the company through most
          challenging situations and enabled it to be better and stronger. Under
          his leadership, the company envisages vertical and horizontal
          expansion to be one of the leading Engineering and Manufacturing
          Company globally.
        </p>
      </div>
    </div>
  );
};
