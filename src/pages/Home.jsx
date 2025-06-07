import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bioprocess from '../assets/bioprocess-engg.jpg';
import image3 from '../assets/vior-img-14.jpg';
import image5 from '../assets/vior-img-8.jpg';
import image6 from '../assets/vior-img-2.jpg';
import image11 from '../assets/vior-img-11.jpg';
import image12 from '../assets/vior-img-12.jpg';
import image13 from '../assets/vior-img-13.jpg';
import image15 from '../assets/vior-img-16.jpg';
import isoCertificate from '../assets/VIOR-ISO9001-2015-Certificate.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSwipeable } from 'react-swipeable';

const banners = [
  {
    image: bioprocess,
    heading: 'Bioprocess Engineering',
    subheading:
      'Design, Operation, Control and Optimization of Process and Customised Design',
  },
  {
    image: image13,
    heading: 'Food & Beverage',
    subheading:
      'Designing and Manufacturing Processing Systems for Dairy, Beer, Food & Juice - F&B Technology Specialists.',
  },
  {
    image: image5,
    heading: 'Connecting Science with Society',
    subheading: 'Turning Vision Into Value',
  },
  {
    image: image15,
    heading: 'Upcoming News!',
    subheading: 'Stay Tuned...',
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
  {
    title: 'Certified. Trusted. Proven.',
    image: isoCertificate,
    description: 'Quality You Can Trust, Standards We Uphold',
    pdf: '/docs/VIOR-ISO-9001-2015 Certificate.pdf',
  },
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 8000); // change slide every 8s

    return () => clearInterval(interval);
  }, []);

  const goToSlide = index => {
    const newIndex = (index + banners.length) % banners.length;
    setCurrentSlide(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide(currentSlide + 1),
    onSwipedRight: () => goToSlide(currentSlide - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex min-h-screen">
      {/* Main */}
      <main className="flex-1 space-y-12">
        {/* Banner */}
        <div className="w-full h-screen relative overflow-hidden">
          {/* Slide Container with Swipe */}
          <div
            {...handlers}
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full relative">
                <img
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  data-aos="fade-up"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-4"
                >
                  <h2 className=" text-white text-3xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-xl">
                    {banner.heading}
                  </h2>
                  <p
                    data-aos="fade-up"
                    className=" text-white text-lg md:text-2xl lg:text-4xl drop-shadow-md"
                  >
                    {banner.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Buttons (Visible on all screens) */}
          <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-3 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full border-2 border-white ${
                  currentSlide === index ? 'bg-white' : 'bg-transparent'
                } hover:bg-white transition duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="ml-4 mr-4">
          {sections.map((section, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row  ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center max-w-6xl mx-auto gap-6`}
            >
              <div
                className="md:w-1/2 text-center md:text-left"
                data-aos="fade-up"
              >
                <Link to={section.link}>
                  <h2 className=" text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                    {section.title}
                  </h2>
                </Link>
                <p className=" text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
              {section.pdf ? (
                <a
                  href={section.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:w-1/2 mb-12 block"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full max-h-[300px] object-contain rounded-2xl shadow-xl bg-white transition-transform duration-300 hover:scale-105"
                  />
                </a>
              ) : (
                <div className="md:w-1/2 mb-12">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};
