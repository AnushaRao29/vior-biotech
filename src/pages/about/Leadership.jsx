import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SEO } from '../../components/SEO';

export const Leadership = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SEO
        title="Leadership | Vior Biotech"
        description="Vior handles Design, Operation, Control and Optimization of Process, Customised Design"
      />
      <div className="min-h-screen flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Text Card Overlapping */}
          <div className="w-full mx-auto md:w-3/4 bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6">
              Founder & CEO : Mr. Raju Rupnar
            </h2>
            <p className="text-lg mb-10">
              Mr. R. A. Rupnar, has been the Founder and Chief Executive Officer
              of VIOR Biotech Equipment Private Limited & Sparkon Engineers and
              has about 35 years’ experience in manufacturing of Pressure
              vessels, Storage tanks, Silos, Heat Exchangers for Chemical,
              Pharmaceutical, Food, Oil & Gas Industries. He has led the company
              through most challenging situations and enabled it to be better
              and stronger. Under his leadership, the company envisages vertical
              and horizontal expansion to be one of the leading Engineering and
              Manufacturing Company globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
