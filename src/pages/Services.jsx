import { useEffect } from "react";
import overview from "../assets/vior-img-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen px-4 pt-24 pb-20 bg-gray-100"
      style={{
        backgroundImage: `url(${overview})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Text Card */}
      <div
        className="relative z-10 max-w-6xl w-full mx-auto bg-white bg-opacity-70 rounded-2xl shadow-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our services include Project Management from Order Procurement to
          Final Handover as described below
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Technical Review meeting will be conducted with the client on
            fortnightly basis to explain the status, constraint and approval of
            project. If any changes made during project, the additional price
            will be charged at actuals by raising a changeover request (COR) and
            sent to the client for approval.
          </li>
          <li>
            Test Procedures will be prepared in accordance with standards as
            part of the engineering for Commissioning and Qualification. All
            test procedures will be presented for approval to the client.
            Following the assembly of the process equipment and the
            implementation of the application software, all tests and
            verifications required for installation and operational
            qualification are carried out.
          </li>
          <li>
            The integrated commissioning and qualification schedule will be
            prepared such the methods for efficient test activities and complete
            within the timeline
          </li>
          <li>
            All installation tests and operational tests during FAT and SAT are
            executed in accordance with the Protocol. Protocols are approved by
            the customer
          </li>
          <li>
            <strong>FAT: </strong> <br></br>
            Once Pre-FAT is completed. The system will be completely ready for
            testing. The FAT is performed in Factory in the presence of client.
            The client will witness the FAT and provide punch points if
            any/approve the FAT for shipment.
          </li>
          <li>
            <strong>SAT:</strong> <br></br>
            After shipment, once system is delivered to the site, the system
            will be reassembled, cable connections and its conduit will be laid
            and system will be set for fine tuning. Once system is ready, SAT
            will be performed at Client site.
          </li>
          <li>
            <strong>Handover:</strong> <br></br>
            After SAT completion, the system will be updated as per the punch
            points issued by the client during SAT and thereafter handover
            report will be hand-overed to the Client.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
