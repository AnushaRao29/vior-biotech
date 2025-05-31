import React from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import labImage from '../assets/vior-img-1.jpg';
import contactImage from '../assets/vior-img-5.jpg';
import image6 from '../assets/vior-img-6.jpg';
import image7 from '../assets/vior-img-7.jpg';

const sections = [
  {
    title: 'Our Mission & Vision',
    image: contactImage,
    description:
      'Specialize in the design, fabrication, and supply of high-quality process equipment for the Biopharma, Pharmaceutical, Food, and Chemical industries—serving clients nationwide and globally',
    link: '/about/mission',
  },
  {
    title: 'Our Leading Departments',
    image: image7,
    description: 'Technical and Non-technical',
    link: '/departments',
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
  { label: 'CIP Station', path: '/products/cip-station' },
  { label: 'Media vessels', path: '/products/media-vessels' },
  { label: 'TFF Systems', path: '/products/tff-systems' },
  { label: 'Mobile Vessels', path: '/products/mobile-vessels' },
  { label: 'Fixed Vessels', path: '/products/fixed-vessels' },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-b bg-blue-50 via-white to-blue-100">
      {/* Sidebar Menu */}
      <aside className="hidden md:block w-48 bg-white shadow-lg p-6 space-y-4 sticky top-0 h-screen">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigate(item.path)}
                className="w-full text-left px-3 py-1 rounded hover:bg-blue-100 text-gray-800 font-medium  border-0 border-solid border-blue-50 bg-gradient-to-b"
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
