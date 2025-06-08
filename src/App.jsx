import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Toaster } from 'react-hot-toast';
import { RoutesElements } from './RoutesElements';
import { HelmetProvider } from 'react-helmet-async';

const App = () => (
  <>
    <HelmetProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {RoutesElements.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  </>
);

export default App;
