import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop, SidebarDrawer } from './';
import { Texts } from '../../src/constants/Texts';

const menuItems = Texts.header
  .find(data => data.menu === 'Products')
  ?.submenus.map(sub => ({
    label: sub.name,
    path: sub.path,
  }));

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
