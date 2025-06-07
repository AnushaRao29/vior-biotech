import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-screen flex justify-center px-4 py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div
          className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10"
          data-aos="fade-up"
        >
          {/* Text Card Overlapping */}
          <div className="w-full mx-auto  bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-2xl p-10 border border-white/20 z-10">
            <h2 className="text-3xl md:text-4xl mb-6 drop-shadow-md">
              {/*  TODO - capitals first letter */}
              Managing the Project from Order Procurement to Final Handover
            </h2>
            <p className="text-lg mb-4">
              <h2 className="text-lg md:text-xl lg:text-2xl mb-4">FAT</h2>
              Once Pre-FAT is completed. The system will be completely ready for
              testing. The FAT is performed in Factory in the presence of
              client. The client will witness the FAT and provide punch points
              if any/approve the FAT for shipment.
            </p>

            <p className="text-lg mb-4">
              <h2 className="text-2xl mb-4">SAT</h2>
              After shipment, once system is delivered to the site, the system
              will be reassembled, cable connections and its conduit will be
              laid and system will be set for fine tuning. Once system is ready,
              SAT will be performed at Client site.
            </p>

            <ul className="list-disc list-outside list-inside list-inside space-y-2 mb-4 pl-5">
              {/*  TODO - remove the bullet point from FAT and SAT and Handover*/}

              <li className="text-lg  mb-4">
                Test Procedures will be prepared in accordance with standards as
                part of the engineering for Commissioning and Qualification. All
                test procedures will be presented for approval to the client.
                Following the assembly of the process equipment and the
                implementation of the application software, all tests and
                verifications required for installation and operational
                qualification are carried out.
              </li>
              <li className="text-lg  mb-4">
                The integrated commissioning and qualification schedule will be
                prepared such the methods for efficient test activities and
                complete within the timeline
              </li>
              <li className="text-lg  mb-4">
                All installation tests and operational tests during FAT and SAT
                are executed in accordance with the Protocol. Protocols are
                approved by the customer
              </li>
            </ul>
            <p className="text-1xl mb-4">
              <h2 className="text-2xl   mb-4">Handover</h2>
              After SAT completion, the system will be updated as per the punch
              points issued by the client during SAT and thereafter handover
              report will be hand-overed to the Client.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
