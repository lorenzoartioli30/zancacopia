import React, { useState } from 'react';
import LogoZanca from '../assets/zancasnclogo.jpg';
import { Link } from 'react-router-dom';
import Phone from '../assets/phone.svg';
import Info from '../assets/briefcase.svg';
import About from '../assets/users.svg';
import HomeLogo from '../assets/home.svg';
import News from '../assets/archive.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="flex items-center">
          <a href="#_" className="flex items-center font-medium text-gray-900 lg:w-auto">
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              <img className="w-15 h-15" src={LogoZanca} alt="Golden Skip" />
            </span>
          </a>
        </div>
        <button
          className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row md:ml-auto`}>
          <ul className="flex flex-col md:flex-row md:gap-x-12">
            <li className="py-2">
              <Link to='/' className="inline-flex items-center no-underline relative after:line">
                <img className="w-5 h-5 mr-2" src={HomeLogo} alt="Home" />
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to='/portfolio' className="inline-flex items-center no-underline relative after:line">
                <img className="w-5 h-5 mr-2" src={Info} alt="Portfolio" />
                Portfolio
              </Link>
            </li>
            <li className="py-2">
              <Link to='/contatti' className="inline-flex items-center no-underline relative after:line">
                <img className="w-5 h-5 mr-2" src={Phone} alt="Contatti" />
                Contatti
              </Link>
            </li>
            <li className="py-2">
              <Link to='/chisiamo' className="inline-flex items-center no-underline relative after:line">
                <img className="w-5 h-5 mr-2" src={About} alt="Chi siamo" />
                Chi siamo
              </Link>
            </li>
            <li className="py-2">
              <Link to='/parlanodinoi' className="inline-flex items-center no-underline relative after:line">
                <img className="w-5 h-5 mr-2" src={News} alt="Parlano di noi" />
                Parlano di noi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
