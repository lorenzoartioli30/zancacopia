import React from 'react';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import LogoZanca from '../assets/zancasnclogo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 shadow-lg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <a href="https://pagedone.io/" className="flex justify-center mb-4">
              <img className="w-10 h-10 rounded-full" src={LogoZanca} alt="Logo Zanca" />
            </a>
            <ul className="text-md flex items-center justify-center flex-col gap-5 md:flex-row md:gap-12 transition-all duration-500 py-6 mb-4 border-b border-gray-200">
              <li>
                <Link to='/' className="text-gray-800 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to='/chisiamo' className="text-gray-800 hover:text-gray-900">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to='/portfolio' className="text-gray-800 hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to='/contatti' className="text-gray-800 hover:text-gray-900">
                  Contattaci
                </Link>
              </li>
              <li>
                <Link to='/parlanodinoi' className="text-gray-800 hover:text-gray-900">
                  Hanno parlato di noi
                </Link>
              </li>
            </ul>
            <div className="flex space-x-10 justify-center items-center mb-6">
              <a
                href='https://www.linkedin.com/in/zancasnc/?originalSubdomain=it'
                className="p-2 block text-gray-900 transition-all duration-500 hover:bg-main transition-colors duration-300 rounded-full"
              >
                <img className="w-5 h-5" src={Linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/zancasnctinteggiature/"
                className="p-2 block text-gray-900 transition-all duration-500 hover:bg-main transition-colors duration-300 rounded-full"
              >
                <img className="w-5 h-5" src={Facebook} alt="Facebook" />
              </a>
            </div>
            <span className="text-sm text-gray-600 block mb-2">
              <a href="mailto:zanca.snc@gmail.com" className="text-gray-800 hover:text-gray-900">zanca.snc@gmail.com</a>
            </span>
            <span className="text-sm text-gray-600 block mb-2">
                <a href="tel:+390376398705" className="text-gray-800 hover:text-gray-900">0376 398705</a>
            </span>
            <span className="text-sm text-gray-500 block">
              ©Zanca snc, All rights reserved - Via G. Verdi, 3 • 46047 Porto Mantovano (MN)
            </span>
            <span className="text-xs text-gray-500 block mt-4">
              <Link to='/privacy' className="text-gray-800 hover:text-gray-900">
                Privacy
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
