import React from 'react';
import { useEffect } from 'react';
import overview from '../assets/vior-img-8.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

{
  /*  TODO - background img  -  or white bg - fade more - text increase font size */
}
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen px-4 pt-12 md:pt-24 pb-20 bg-gray-100"
      style={{
        backgroundImage: `url(${overview})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Text Card */}
      <div
        className="relative z-10 max-w-4xl w-full mx-auto bg-white bg-opacity-70 rounded-2xl shadow-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold  mb-6">Overview</h2>

        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          <strong>Vior Biotech</strong> established in 2023, we specialize in
          the design, fabrication, and supply of high-quality process equipment
          for the Biopharma, Pharmaceutical, Food, and Chemical
          industries—serving clients nationwide and globally.
        </p>
        <h2 className="text-3xl font-bold  mb-4">Sister Company</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          <strong>Sparkon Engineers</strong> has about 35 years’ experience in
          manufacturing of Pressure vessels, Storage tanks, Silos, Heat
          Exchangers for Chemical, Pharmaceutical, Food, Oil & Gas Industries.
        </p>
      </div>
    </div>
  );
};

export default About;
