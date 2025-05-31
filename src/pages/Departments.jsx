import React from 'react';
import { useEffect } from 'react';
import image2 from '../assets/vior-img-2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Departments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div
        className="max-w-7xl mx-auto backdrop-blur-md bg-white/60 rounded-3xl p-8 shadow-xl"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical */}
          <div
            className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical</h2>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Bioprocess</li>
              <li>Design</li>
              <li>Production</li>
              <li>Quality Control</li>
              <li>Quality Assurance</li>
              <li>Project Management</li>
              <li>Instrumentation & Automation</li>
            </ul>
          </div>
          {/* Non-Technical */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6 space-y-4 text-sm text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Non Technical
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Human Resources</li>
                <li>Accounts</li>
                <li>Purchase</li>
                <li>Procurement</li>
                <li>Stores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
