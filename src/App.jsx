import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // 👈 Add this
import Mission from "./pages/about/Mission";
import Leadership from "./pages/about/Leadership";
import Services from "./pages/Services";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import BioReactors from "./pages/products/BioReactors";
import Fermenters from "./pages/products/Fermenters";
import CIPStation from "./pages/products/CIPStation";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/bioreactors" element={<BioReactors />} />
        <Route path="/products/fermenters" element={<Fermenters />} />
        <Route path="/products/cip-station" element={<CIPStation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
