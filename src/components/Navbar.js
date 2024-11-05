import React from 'react';
import LogoZanca from '../assets/zancasnclogo.jpg'
import { Link } from 'react-router-dom';
import Phone from '../assets/phone.svg';
import Info from '../assets/briefcase.svg';
import About from '../assets/users.svg';
import HomeLogo from '../assets/home.svg';
import News from '../assets/archive.svg'

const Navbar = () => {
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a href="#_" className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center">
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
            <img className="w-15 h-15" src={LogoZanca} alt="Golden Skip" />
            </span>
          </a>
          <nav className="flex flex-wrap items-center text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <ul className="flex gap-x-12">
                <li className="relative table-cell py-2">
                <Link 
                    to='/' 
                    className="inline-flex items-center no-underline relative after:line"
                >
                    <img className="w-5 h-5 mr-2" src={HomeLogo} alt="Golden Skip" />
                    Home
                </Link>
                </li>
                <li className="relative table-cell py-2">
                <Link 
                    to='/portfolio'
                    className="inline-flex items-center no-underline relative after:line" 
                    href="#"
                >
                    <img className="w-5 h-5 mr-2" src={Info} alt="Golden Skip" />
                    Portfolio
                </Link>
                </li>
                <li className="relative table-cell py-2">
                <Link 
                    to='/contatti' 
                    className="inline-flex items-center no-underline relative after:line"
                >
                    <img className="w-5 h-5 mr-2" src={Phone} alt="Golden Skip" />
                    Contatti
                </Link>
                </li>
                <li className="relative table-cell py-2">
                <Link
                    to='/chisiamo' 
                    className="inline-flex items-center no-underline relative after:line" 
                    href="#"
                >
                    <img className="w-5 h-5 mr-2" src={About} alt="Golden Skip" />
                    Chi siamo
                </Link>
                </li>
                <li className="relative table-cell py-2">
                <Link
                    to='/parlanodinoi' 
                    className="inline-flex items-center no-underline relative after:line" 
                    href="#"
                >
                    <img className="w-5 h-5 mr-2" src={News} alt="Golden Skip" />
                    Parlano di noi
                </Link>
                </li>
            </ul>
            </nav>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
