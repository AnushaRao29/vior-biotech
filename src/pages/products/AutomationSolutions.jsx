import React from 'react';
import { useEffect } from 'react';
import overview from '../../assets/vior-img-9.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

{
  /*  TODO - background img  -  or white bg - fade more - text increase font size */
}
export const AutomationSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative min-h-screen px-4 pt-24 pb-20 bg-gray-100"
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
        className="relative z-10 max-w-6xl w-full mx-auto bg-white bg-opacity-80 rounded-2xl shadow-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold  mb-4">
          Simplifying Complexity with Smart Automation
        </h2>
        <p className="text-lg mb-4">
          At <strong>Vior</strong>, we simplify your complex production
          challenges with intelligent, streamlined automation solutions. Whether
          it’s full-scale plant automation or tailored, system-specific
          requirements, our offerings are 21 CFR Part 11 compliant, designed to
          meet the stringent demands of pharmaceutical and biopharmaceutical
          manufacturing.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Smarter Automation. Smoother Operations.{' '}
        </h2>
        <p className="text-lg mb-4">
          Our automation technology empowers you to monitor, record, analyze,
          and control entire plant operations—from individual equipment and
          Human Machine Interfaces (HMI), to Manufacturing Execution Systems
          (MES), and right through to seamless integration with Enterprise
          Resource Planning (ERP) systems. All from a single control station.
        </p>
        <p className="text-lg mb-4">The result?</p>
        <ul className="list-disc list-outside list-inside space-y-2 mb-4">
          <li>Efficient batch control</li>
          <li>Consistent batch reproducibility</li>
          <li>Effortless audit compliance</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Why Vior Automation? </h2>
        <p className="text-lg mb-4">
          Our dedicated Automation Team brings deep domain expertise and
          delivers user-friendly, regulation-ready solutions—crafted
          specifically for the rigorous environments of pharma and biopharma
          production.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Capabilities </h2>
        <p className="text-lg mb-4">
          We offer seamless automation and integration across:
        </p>
        <ul className="list-disc list-outside list-inside space-y-2 mb-4">
          <li>
            Multiple Unit Operations Fermentation, Cleaning-In-Place (CIP),
            Sterilization-In-Place (SIP), chromatography, and more.
          </li>
          <li>
            Multiple Production Stages From upstream to downstream, all the way
            to fill & finish processes.
          </li>
          <li>
            3rd Party Equipment Integration Smooth, unified control over systems
            from multiple vendors across various operations.{' '}
          </li>
          <li>
            System Retrofits Enhancing legacy systems with modern automation
            without replacing existing infrastructure.
          </li>
          <li>
            System Upgrades Modernizing and scaling your operations with the
            latest automation technologies.
          </li>
        </ul>
        <p className="text-lg mb-4">
          Let <strong>Vior</strong> transform your production into a
          streamlined, compliant, and future-ready operation—designed with
          simplicity and precision.
        </p>
      </div>
    </div>
  );
};
