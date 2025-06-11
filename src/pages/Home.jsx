import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SEO } from '../components/SEO';
import { Texts } from '../constants/Texts';
import homepageBanner1 from '../assets/homepage-banner-1.jpg';
import homepageBanner2 from '../assets/homepage-banner-2.jpg';
import homepageBanner3 from '../assets/homepage-banner-3.jpg';
import homepageBanner4 from '../assets/homepage-banner-4.jpg';
import homepageMission from '../assets/homepage-mission.jpg';
import homepageClients from '../assets/homepage-clients.jpg';
import homepageServices from '../assets/homepage-services.jpg';
import homepageContact from '../assets/homepage-contact.jpg';
import isoCertificate from '../assets/vior-iso-certificate.jpg';

const banners = [
  {
    image: homepageBanner1,
    heading: Texts.home.homepageBannerTitle1,
    subheading: Texts.home.homepageBannerSubheading1,
  },
  {
    image: homepageBanner2,
    heading: Texts.home.homepageBannerTitle2,
    subheading: Texts.home.homepageBannerSubheading2,
  },
  {
    image: homepageBanner3,
    heading: Texts.home.homepageBannerTitle3,
    subheading: Texts.home.homepageBannerSubheading3,
  },
  {
    image: homepageBanner4,
    heading: Texts.home.homepageBannerTitle4,
    subheading: Texts.home.homepageBannerSubheading4,
  },
];

const sections = [
  {
    title: Texts.home.homepageSectionTitle1,
    image: homepageMission,
    description: Texts.home.homepageSectionDescription1,
    link: Texts.home.homepageSectionLink1,
  },
  {
    title: Texts.home.homepageSectionTitle2,
    image: homepageClients,
    description: Texts.home.homepageSectionDescription2,
    link: Texts.home.homepageSectionLink2,
  },
  {
    title: Texts.home.homepageSectionTitle3,
    image: homepageServices,
    description: Texts.home.homepageSectionDescription3,
    link: Texts.home.homepageSectionLink3,
  },
  {
    title: Texts.home.homepageSectionTitle4,
    image: homepageContact,
    description: Texts.home.homepageSectionDescription4,
    link: Texts.home.homepageSectionLink4,
  },
  {
    title: Texts.home.homepageSectionTitle5,
    image: isoCertificate,
    description: Texts.home.homepageSectionDescription5,
    pdf: Texts.home.homepageSectionLink5,
  },
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5000); // change slide every 5s

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
    <>
      <SEO
        title="Home | Vior Biotech"
        description="Vior handles Design, Operation, Control and Optimization of Process, Customised Design"
      />
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
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full relative"
                >
                  <img
                    src={banner.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    data-aos="fade-up"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-4"
                  >
                    <h2 className=" text-white text-3xl md:text-5xl lg:text-7xl  mb-4 drop-shadow-xl">
                      {banner.heading}
                    </h2>
                    <h6
                      data-aos="fade-up"
                      className=" text-white text-lg md:text-2xl lg:text-4xl drop-shadow-md"
                    >
                      {banner.subheading}
                    </h6>
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
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center max-w-6xl mx-auto gap-6`}
              >
                <div
                  className="md:w-1/2 text-center md:text-left"
                  data-aos="fade-up"
                >
                  <Link to={section.link || '#'}>
                    <h2 className="text-3xl md:text-4xl text-primary mb-4">
                      {section.title}
                    </h2>
                  </Link>
                  <p className="text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="md:w-1/2 mb-12">
                  <img
                    src={section.image}
                    alt={section.title}
                    className={`w-full ${
                      index === sections.length - 1
                        ? 'max-h-[400px] object-contain'
                        : 'h-72 md:h-96 object-cover rounded-2xl shadow-xl'
                    }`}
                  />
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
