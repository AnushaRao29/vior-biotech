import React from 'react';
import { useEffect } from 'react';
import image from '../../assets/background-automation.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Texts } from '../../constants/Texts';

export const AutomationSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-screen px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col items-center gap-10 mx-auto"
          data-aos="fade-up"
        >
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            {Texts.products.automationSolutions.map((data, index) => (
              <div key={index}>
                <h2 className="text-3xl md:text-4xl mb-4">{data.title}</h2>
                <p className="text-lg mb-4">{data.body}</p>
                {data.points && (
                  <ul className="list-disc list-outside list-inside space-y-2 mb-4">
                    {data.points.map((point, index1) => (
                      <li className="text-lg mb-4" key={index1}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {/* Image */}
          <img
            src={image}
            alt="Automation"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
