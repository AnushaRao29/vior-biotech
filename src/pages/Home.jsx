import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import labImage from "../assets/vior-img-1.jpg";
import sustainabilityImage from "../assets/vior-img-4.jpg";
import contactImage from "../assets/vior-img-5.jpg";
import image6 from "../assets/vior-img-6.jpg";
import image7 from "../assets/vior-img-7.jpg";

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

const menuItems = [
  { label: "Bioreactors", path: "/products/bioreactors" },
  { label: "Fermenters", path: "/products/fermenters" },
  { label: "CIP Station", path: "/products/cip-station" },
  { label: "Media vessels", path: "/products/media-vessels" },
  { label: "TFF Systems", path: "/products/tff-systems" },
  { label: "Mobile Vessels", path: "/products/mobile-vessels" },
  { label: "Fixed Vessels", path: "/products/fixed-vessels" },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Sidebar Menu */}
      <aside className="w-48 bg-white shadow-lg p-6 space-y-4 sticky top-0 h-screen">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigate(item.path)}
                className="w-full text-left px-3 py-1 rounded hover:bg-blue-100 text-gray-800 font-medium"
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
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center max-w-6xl mx-auto gap-10`}
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
          className="fixed bottom-6 right-6 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </main>
    </div>
  );
};

export default Home;
