import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import labImage from "../assets/vior-img-1.jpg";
import biotechImage from "../assets/vior-img-3.jpg";
import productImage from "../assets/vior-img-2.jpg";
import sustainabilityImage from "../assets/vior-img-4.jpg";
import contactImage from "../assets/vior-img-5.jpg";
import image6 from "../assets/vior-img-6.jpg";
import image7 from "../assets/vior-img-7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const sections = [
  {
    title: "Advancing Science, Improving Lives",
    image: contactImage,
    description:
      "At VIOR Biotech, we are committed to advancing scientific discoveries to enhance and extend human life through innovative biotech solutions.",
  },
  {
    title: "Pioneering Biotech Solutions",
    image: image7,
    description:
      "Our research is reshaping the future of medicine by exploring cutting-edge treatments and novel biological insights.",
  },
  {
    title: "Innovative Product Development",
    image: image6,
    description:
      "From pharmaceuticals to diagnostic tools, our pipeline is built to meet the evolving needs of the healthcare industry.",
  },
  {
    title: "Sustainability and Responsibility",
    image: sustainabilityImage,
    description:
      "We integrate environmental care with scientific progress, ensuring our innovations respect both people and the planet.",
  },
  {
    title: "Connect with VIOR Biotech",
    image: labImage,
    description:
      "Get in touch with our experts for partnerships, career opportunities, and more information about our biotech initiatives.",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pt-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 bg-fixed">
      {/* <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 3000 }}
  loop={true}
  className="w-full h-[400px] md:h-[500px]"
>
  {[labImage, biotechImage, productImage].map((img, i) => (
    <SwiperSlide key={i}>
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-xl text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {sections[i].title}
          </h2>
          <p className="text-lg md:text-xl">{sections[i].description}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper> */}

      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center max-w-6xl mx-auto px-4 md:px-8 gap-10`}
          data-aos="fade-up"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {section.title}
            </h2>
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

      {/* Scroll-to-top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;
