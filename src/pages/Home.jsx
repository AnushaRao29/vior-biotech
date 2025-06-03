import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import labImage from '../assets/vior-img-1.jpg';
import contactImage from '../assets/vior-img-5.jpg';
import image6 from '../assets/vior-img-6.jpg';

const sections = [
  {
    title: 'Our Mission & Vision',
    image: contactImage,
    description:
      'Specialize in the design, fabrication, and supply of high-quality process equipment for the Biopharma, Pharmaceutical, Food, and Chemical industries—serving clients nationwide and globally',
    link: '/about/mission',
  },
  {
    title: 'Innovative Product Development',
    image: image6,
    description:
      'From pharmaceuticals to diagnostic tools, our pipeline is built to meet the evolving needs of the healthcare industry.',
    link: '/services',
  },
  {
    title: 'Connect with VIOR Biotech',
    image: labImage,
    description:
      'Get in touch with our experts for partnerships, career opportunities, and more information about our biotech initiatives.',
    link: '/contact',
  },
];

const menuItems = [
  { label: 'Bioreactors', path: '/products/bioreactors' },
  { label: 'Fermenters', path: '/products/fermenters' },
  { label: 'Vaporization Vessel', path: '/products/vaporization-vessel' },
  { label: 'Process Vessel', path: '/products/process-vessel' },
  { label: 'Mobile Vessel', path: '/products/mobile-vessel' },
  { label: 'Buffer Vessel', path: '/products/buffer-vessel' },
  { label: 'Harvest Vessel', path: '/products/harvest-vessel' },
  { label: 'Media Vessel', path: '/products/media-vessel' },
  { label: 'CIP/SIP Skids', path: '/products/cip-sip-skids' },
  { label: 'Filtration Skids', path: '/products/filtration-skids' },
  { label: 'CIP Stations', path: '/products/cip-stations' },
  { label: 'Inactivation Vessel', path: '/products/inactivation-vessel' },
  { label: 'Mixing Tanks', path: '/products/mixing-tanks' },
  { label: 'Automation Solutions', path: '/products/automation-solutions' },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-b bg-blue-50 via-white to-blue-100">
      {/* Sidebar Menu */}
      <aside className="hidden md:block w-56 bg-white shadow-lg p-4 space-y-4 sticky top-0 h-screen">
        <ul className="">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`border-b border-gray-300 ${index === menuItems.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => navigate(item.path)}
                className="w-full text-left px-3 py-2 hover:bg-blue-100  font-medium bg-gradient-to-b"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-24 pt-12 px-6 md:px-12">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center max-w-6xl mx-auto gap-10`}
            data-aos="fade-up"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <Link to={section.link}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                  {section.title}
                </h2>
              </Link>

              <p className="text-gray-700 text-lg leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
