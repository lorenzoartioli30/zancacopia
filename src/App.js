import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Newspaper from './pages/Newspaper';

function App() {
  return (
    <Router>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;