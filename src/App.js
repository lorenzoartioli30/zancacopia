import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Newspaper from './pages/Newspaper';
import ArrowUp from './assets/arrow-up-circle.svg';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/chisiamo" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/parlanodinoi" element={<Newspaper />} />
          </Routes>
        </div>

        <div className="relative">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 bg-main text-white px-4 py-4 rounded-full shadow-lg hover:bg-dark-main focus:outline-none transition-colors duration-300"
          >
            <img className="w-5 h-5" src={ArrowUp} alt="Scroll to top" />
          </button>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
