import React, { useState } from 'react';
import Articolo1 from '../assets/giornale1.webp';
import Articolo2 from '../assets/Gazz-MN-mezza-pagina-275x200-20-settembre-2022--1024x745.webp';
import Articolo3 from '../assets/sito-giugno-mezza-pagina-275x200-MAGGIO-2022--1024x445.webp';
import Articolo4 from '../assets/GIUGNO-sito-2023-speciale-Edilizia-Zanca-La-Voce-280x400-1-.webp';
import Articolo5 from '../assets/ZANCA-Sponsor-x-sito.webp';
import Articolo6 from '../assets/Senza-titolo-1-1-1024x681.webp';
import { motion } from 'framer-motion';

const articles = [
  { id: 1, imageUrl: Articolo1 },
  { id: 2, imageUrl: Articolo2 },
  { id: 3, imageUrl: Articolo3 },
  { id: 4, imageUrl: Articolo4 },
  { id: 5, imageUrl: Articolo5 },
  { id: 6, imageUrl: Articolo6 },
];

function Newspaper() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  const openOverlay = (article) => {
    setSelectedArticle(article);
    setOverlayVisible(true);
    setOverlayOpacity(0); // Imposta l'opacità a 0 prima di visualizzarlo
    setTimeout(() => setOverlayOpacity(100), 0); // Cambia l'opacità dopo un breve ritardo
  };

  const closeOverlay = () => {
    setOverlayOpacity(0); // Inizia a chiudere l'overlay
    setTimeout(() => {
      setOverlayVisible(false);
      setSelectedArticle(null); // Rimuovi l'articolo dopo la transizione
    }, 300); // Attendi il tempo della transizione
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Imposta i valori iniziali
      animate={{ opacity: 1, y: 0 }} // Imposta i valori finali
      transition={{ duration: 1 }} // Durata dell’animazione in secondi
      className="px-2 md:px-0"
    >
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Hanno parlato di noi</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {articles.map(article => (
          <div
            key={article.id}
            onClick={() => openOverlay(article)}
            className="relative bg-center bg-cover bg-no-repeat cursor-pointer h-48 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${article.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Overlay per visualizzare l'articolo ingrandito */}
      {isOverlayVisible && selectedArticle && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity bg-opacity-80 duration-300 ease-in-out`}
          style={{ opacity: overlayOpacity, pointerEvents: overlayOpacity ? 'auto' : 'none' }}
          onClick={closeOverlay}
        >
          <div className="relative max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeOverlay}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedArticle.imageUrl}
              alt="Articolo Ingrandito"
              className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 ease-in-out"
            />
          </div>
        </div>
      )}
    </div>
    </motion.section>
  );
}

export default Newspaper;
