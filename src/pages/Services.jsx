import React from 'react';
import { useEffect } from 'react';
import overview from '../assets/vior-img-5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen px-4 pt-12 md:pt-24 pb-20 bg-gray-100 bg-opacity-0"
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
        className="relative z-10 max-w-6xl w-full mx-auto bg-white bg-opacity-70 rounded-2xl shadow-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold  mb-4">
          {/*  TODO - capitals first letter */}
          Managing the Project from Order Procurement to Final Handover
        </h2>
        <p className="text-lg mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold  mb-4">
            FAT
          </h2>
          Once Pre-FAT is completed. The system will be completely ready for
          testing. The FAT is performed in Factory in the presence of client.
          The client will witness the FAT and provide punch points if
          any/approve the FAT for shipment.
        </p>

        <p className="text-lg mb-4">
          <h2 className="text-2xl font-bold  mb-4">SAT</h2>
          After shipment, once system is delivered to the site, the system will
          be reassembled, cable connections and its conduit will be laid and
          system will be set for fine tuning. Once system is ready, SAT will be
          performed at Client site.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4">
          {/*  TODO - remove the bullet point from FAT and SAT and Handover*/}

          <li className="text-lg mb-4">
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
            prepared such the methods for efficient test activities and complete
            within the timeline
          </li>
          <li className="text-lg  mb-4">
            All installation tests and operational tests during FAT and SAT are
            executed in accordance with the Protocol. Protocols are approved by
            the customer
          </li>
        </ul>
        <p className="text-1xl mb-4">
          <h2 className="text-2xl font-bold  mb-4">Handover</h2>
          After SAT completion, the system will be updated as per the punch
          points issued by the client during SAT and thereafter handover report
          will be hand-overed to the Client.
        </p>
      </div>
    </div>
  );
};
