import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop, SidebarDrawer } from './';

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

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header />
      <SidebarDrawer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        menuItems={menuItems}
      />
      <Outlet />
      <Footer />
    </>
  );
};
