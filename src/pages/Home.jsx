import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image3 from '../assets/vior-img-3.jpg';
import image5 from '../assets/vior-img-8.jpg';
import image6 from '../assets/vior-img-2.jpg';
import image11 from '../assets/vior-img-11.jpg';
import image12 from '../assets/vior-img-12.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const banners = [
  {
    image: image5,
    heading: 'Turning Vision Into Value',
    subheading: '',
    link: '/about/mission',
  },
  {
    image: image5,
    heading: 'Connecting Science with Society',
    subheading: 'Creating value through research.',
    // link: '/products/bioreactors',
  },
  {
    image: image5,
    heading: 'Upcoming News!',
    subheading: 'Stay Tuned...',
    // link: '/products/fermenters',
  },
];

const sections = [
  {
    title: 'Our Mission & Vision',
    image: image6,
    description:
      'Specialize in the design, fabrication, and supply of high-quality process equipment for the Biopharma, Pharmaceutical, Food, and Chemical industries—serving clients nationwide and globally',
    link: '/about/mission',
  },
  {
    title: 'Our Clientele',
    image: image11,
    description:
      'Every effort we make is driven by the potential to create meaningful value for our clients, helping us advance our mission and contribute to a greater cause.',
    link: '/clientele',
  },
  {
    title: 'Innovative Product Development',
    image: image3,
    description:
      'From pharmaceuticals to diagnostic tools, our pipeline is built to meet the evolving needs of the healthcare industry.',
    link: '/services',
  },
  {
    title: 'Connect with VIOR Biotech',
    image: image12,
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

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 8000); // change slide every 8s

    return () => clearInterval(interval);
  }, []);

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b bg-blue-50 via-white to-blue-100">
      {/* Sidebar */}
      <aside className="hidden md:block w-56 bg-white shadow-lg p-4 space-y-4 sticky top-0 h-screen">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`border-b border-gray-300 ${index === menuItems.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => navigate(item.path)}
                className="w-full text-left px-3 py-2 hover:bg-blue-100 font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 space-y-12 pt-12">
        {/* Banner */}
        <div className="w-full flex justify-center mb-12">
          <div className="relative w-full md:w-[85%] h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] rounded-2xl shadow-xl overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative h-full"
                  data-aos="fade-up"
                >
                  <Link to={banner.link}>
                    <img
                      src={banner.image}
                      alt={`Banner ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-4">
                      <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-2 drop-shadow-xl">
                        {banner.heading}
                      </h2>
                      <p className="text-white text-base md:text-xl lg:text-3xl font-bold drop-shadow-md">
                        {banner.subheading}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-gray-400'
                  } hover:bg-white transition duration-300`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="ml-4 mr-4">
          {sections.map((section, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row  ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center max-w-6xl mx-auto gap-10`}
            >
              <div
                className="md:w-1/2 text-center md:text-left mb-12"
                data-aos="fade-up"
              >
                <Link to={section.link}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                    {section.title}
                  </h2>
                </Link>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="md:w-1/2 mb-12">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};
