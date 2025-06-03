import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mission from './pages/about/Mission';
import Leadership from './pages/about/Leadership';
import Services from './pages/Services';
import About from './pages/About';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import Home from './pages/Home';
import BioReactors from './pages/products/BioReactors';
import Fermenters from './pages/products/Fermenters';
import CIPStations from './pages/products/CIPStations';
import VaporizationVessel from './pages/products/VaporizationVessel';
import ProcessVessel from './pages/products/ProcessVessel';
import MobileVessel from './pages/products/MobileVessel';
import BufferVessel from './pages/products/BufferVessel';
import HarvestVessel from './pages/products/HarvestVessel';
import MediaVessel from './pages/products/MediaVessel';
import CIPSIPSkids from './pages/products/CIPSIPSkids';
import FiltrationSkids from './pages/products/FiltrationSkids';
import InactivationVessel from './pages/products/InactivationVessel';
import MixingTanks from './pages/products/MixingTanks';
import AutomationSolutions from './pages/products/AutomationSolutions';

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
        <Route path="/products/cip-stations" element={<CIPStations />} />
        <Route
          path="/products/vaporization-vessel"
          element={<VaporizationVessel />}
        />
        <Route path="/products/process-vessel" element={<ProcessVessel />} />
        <Route path="/products/mobile-vessel" element={<MobileVessel />} />
        <Route path="/products/buffer-vessel" element={<BufferVessel />} />
        <Route path="/products/harvest-vessel" element={<HarvestVessel />} />
        <Route path="/products/media-vessel" element={<MediaVessel />} />
        <Route path="/products/cip-sip-skids" element={<CIPSIPSkids />} />
        <Route
          path="/products/filtration-skids"
          element={<FiltrationSkids />}
        />
        <Route
          path="/products/inactivation-vessel"
          element={<InactivationVessel />}
        />
        <Route path="/products/mixing-tanks" element={<MixingTanks />} />
        <Route
          path="/products/automation-solutions"
          element={<AutomationSolutions />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
