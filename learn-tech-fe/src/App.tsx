import React from 'react';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Testimonials from './Components/Testimonials/Testimonials';
import { Footer } from './Components/Footer/Footer';
import { Placements } from './Components/Placements/Placements';
import { About } from './Components/AboutUs/About-us';
import { Home } from './Components/Home/Home';
import FloatingIcons from './Components/Pop-up/FloatIcons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename="/learn-tech-it-solution">
      <Header />
      <FloatingIcons></FloatingIcons>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
