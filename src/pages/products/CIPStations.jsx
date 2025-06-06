import React from 'react';
import { useEffect } from 'react';
import viorTeam from '../../assets/bioreactor.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const CIPStations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex justify-center px-4 py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100">
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
            <h2 className="text-3xl font-bold  mb-4">CIP Stations</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <p className="pb-4">
                Clean-in-Place (CIP) is a sophisticated process designed to
                eliminate residues, contaminants, and microbial biofilms from
                fermenter surfaces without disassembly.
              </p>
              <li>
                The core principles of CIP involve the circulation of cleaning
                solutions and sanitizing agents.
              </li>
              <li>Centralized CIP units</li>
              <li>
                Customized CIP units with Integrated Systems for Upstream and
                Downstream.
              </li>
              <li>Design compliance to ASME BPE and GMP 5 Guidelines.</li>
              <li>PLC control system with HMI and SCADA</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
