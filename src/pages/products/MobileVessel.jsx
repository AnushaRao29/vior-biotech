import React from 'react';
import { useEffect } from 'react';
import viorTeam from '../../assets/bioreactor.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MobileVessel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="flex justify-center px-4 py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8"
          data-aos="fade-up"
        >
          {/* Image Card */}
          <div className="w-full md:w-1/2 rounded-2xl shadow-xl overflow-hidden">
            <img
              src={viorTeam}
              alt="Vior Biotech Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Card Overlapping */}
          <div className="w-full md:w-1/2 md:-ml-20 md:-mt-[-100px] bg-white rounded-2xl shadow-2xl p-8 z-10">
            <h2 className="text-3xl font-bold  mb-4">Mobile Vessel</h2>

            <p className="pb-4">
              Compact design with Integrated CIP unit. Designed to withstand
              pressure, temperature, and chemical interactions.Equipped with
              ports for sensors, probes, and sampling devices.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Minimum Space requirement</li>
              <li>Optimized Mobile vessel Design</li>
              <li>Range: 5L - 300L ( Customized to user requirement)</li>
              <li>Agitator: Top Mounted / Bottom Mounted</li>
              <li>Design compliance to ASME BPE and GMP 5 Guidelines.</li>
              <li>PLC control system with HMI and SCADA.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
