import React, { useEffect } from 'react';
import viorTeam from '../../assets/mission-background.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SEO } from '../../components/SEO';

export const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <SEO
        title="Mission and Vision | Vior Biotech"
        description="Vior handles Design, Operation, Control and Optimization of Process, Customised Design"
      />
      <div className="min-h-[calc(100vh-64px)] flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={viorTeam}
              alt="Vior Biotech Equipment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-3/4 md:-ml-20 md:-mt-[-100px] bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              Our Mission & Vision
            </h2>
            <p className="text-lg mb-4 ">
              <strong className="text-white">
                Vior Biotech Equipment Private Limited
              </strong>{' '}
              is a self-sustainable, bioprocess equipment manufacturing company
              established in 2023. Vior aims to serve the Biopharma,
              Pharmaceutical, Food, and Chemical industries across the nation.
            </p>
            <p className="text-xl font-semibold  mb-4">
              Turning Vision into Value:
            </p>
            <ul className="list-disc list-outside list-inside space-y-3  text-lg">
              <li>
                Understand user specifications and requirements to deliver
                high-quality products in compliance with standard guidelines.
              </li>
              <li>Meet and deliver customer expectations with ease.</li>
              <li>
                Be open to customized and innovative ideas for process
                optimization.
              </li>
              <li>Prioritize safety of the personnel involved.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
