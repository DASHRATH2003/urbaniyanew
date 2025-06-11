import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Urbania from './Components/Urbania';
import UrbaniaTwelvePlusOne from './Components/UrbaniaTwelvePlusOne';
import UrbaniaSixteenPlusOne from './Components/UrbaniaSixteenPlusOne';
import UrbaniaLuxuryTenPlusOne from './Components/UrbaniaLuxuryTenPlusOne';
import UrbaniaLuxuryTwelvePlusOne from './Components/UrbaniaLuxuryTwelvePlusOne';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';
import BusTwentyOnePlusOne from './Components/BusTwentyOnePlusOne';
import BusTwentyFivePlusOne from './Components/BusTwentyFivePlusOne';
import './styles/App.css';

const App = () => {
  // Add scroll restoration
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urbania" element={<Urbania />} />
            <Route path="/urbania/12-1-seater" element={<UrbaniaTwelvePlusOne />} />
            <Route path="/urbania/16-1-seater" element={<UrbaniaSixteenPlusOne />} />
            <Route path="/urbania/10-1-luxury" element={<UrbaniaLuxuryTenPlusOne />} />
            <Route path="/urbania/12-1-luxury" element={<UrbaniaLuxuryTwelvePlusOne />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bus/21-1-seater" element={<BusTwentyOnePlusOne />} />
            <Route path="/bus/25-1-seater" element={<BusTwentyFivePlusOne />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;