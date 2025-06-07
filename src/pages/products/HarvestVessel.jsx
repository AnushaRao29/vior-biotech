import React from 'react';
import { useEffect } from 'react';
import viorTeam from '../../assets/bioreactor.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HarvestVessel = () => {
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
              src={viorTeam}
              alt="Vior Biotech Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Card Overlapping */}
          <div className="w-full md:w-3/4 md:-ml-20 md:-mt-[-100px] bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              Harvest Vessel
            </h2>

            <p className="pb-4 text-white">
              Sterile Efficient Harvest Collection system.Compact design with
              combined skids and Platform with Integrated CIP unit.Designed to
              withstand pressure, temperature, PH, Conductivity and chemical
              interactions.Equipped with ports for sensors, probes, and sampling
              devices.
            </p>
            <ul className="list-disc list-outside list-inside  space-y-2 text-white">
              <li>Minimum Space requirement</li>
              <li>Optimized Buffer Vessel Design</li>
              <li>Range: 5L - 50KL ( Customized to user requirement)</li>
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
