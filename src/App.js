// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignInSide from './features/auth/SignInSide';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobListings from './pages/JobListings';
import CompanyShowcase from './pages/CompanyShowcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavigationBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} />
        {/* If you have a 404 page or other routes, define them here */}
      </Routes>
    </>
  );
};

export default App;
