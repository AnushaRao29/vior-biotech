import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Mission,
  Leadership,
  BioReactors,
  Fermenters,
  CIPStations,
  VaporizationVessel,
  ProcessVessel,
  MobileVessel,
  BufferVessel,
  HarvestVessel,
  MediaVessel,
  CIPSIPSkids,
  FiltrationSkids,
  InactivationVessel,
  MixingTanks,
  AutomationSolutions,
  Clientele,
  Gallery,
  Services,
  Contact,
} from './pages';
import { Header, Footer, ScrollToTop } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/leadership" element={<Leadership />} />

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

        <Route path="/clientele" element={<Clientele />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
