import { useEffect } from "react";
import viorTeam from "../../assets/vior-team.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Vior Biotech Equipment Private Limited</strong> is a
              self-sustainable, bioprocess equipment manufacturing company
              established in 2023. Vior aims to serve the Biopharma,
              Pharmaceutical, Food, and Chemical industries across the nation.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Turning Vision into Value:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
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

export default Mission;
