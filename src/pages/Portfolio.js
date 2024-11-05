import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lavoro1 from '../assets/lavoro1.webp';
import Lavoro2 from '../assets/lavoro2.webp';
import Lavoro3 from '../assets/lavoro3.jpg';
import Lavoro4 from '../assets/lavoro4.webp';
import Lavoro5 from '../assets/lavoro5.webp';
import Lavoro6 from '../assets/lavoro6.webp';
import Bagnolo from '../assets/primaedopobagnolo.png'

function Portfolio() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    { id: 1, title: "Villetta Interna a Bagnolo", description: "Rimozione della muffa con disinfettante e pittura antimuffa ionizzante...", fullDescription: "Nella villetta interna di Bagnolo San Vito è stato eseguito un trattamento completo per la rimozione della muffa. Abbiamo utilizzato un disinfettante apposito per eliminare le spore, seguito dall'applicazione di una pittura antimuffa ionizzante per garantire una protezione duratura contro la formazione di nuova muffa, mantenendo così un ambiente salubre e protetto.", image: Bagnolo },
    { id: 2, title: "La boiserie", description: "Una tecnica decorativa con pannelli di legno...", fullDescription: "La Boiserie è una tecnica decorativa consistente nella copertura delle pareti con pannelli di legno, variamente intarsiati, incisi e intagliati. Il termine Boiserie si sta affermando sempre più nella realizzazione delle finiture d’interni delle case moderne.a parola significa lavorazione del legno e deriva dal francese bois, ovvero legno. Molto popolare in Francia a partire dal secolo XVII, la tecnica cominciò ad essere utilizzata per rivestire pareti, armadi, porte e librerie. È un elemento in grado di arricchire il contenuto della stanza in cui viene utilizzata. Sebbene sia legata ai tempi antichi, nelle case moderne diventa un elemento che dona un tocco di stile e classe all’ambiente. Nell’arredamento moderno, oltre all’utilizzo del più tradizionale legno, sono possibili boiseries in stucco o gesso ceramico", image: Lavoro1 },
    { id: 3, title: "Palazzo Siliprandi", description: "Tinteggiatura con idropittura ai silicati...", fullDescription: "Centro storico di Mantova Palazzo Siliprandi tinteggiato con idropittura minerale ai silicati.", image: Lavoro2 },
    { id: 4, title: "Centro storico", description: "Ripristino dei portici del centro storico...", fullDescription: "Ripristino e colorazione dei portici del centro storico di Mantova, sito Patrimonio dell’Unesco", image: Lavoro3 },
    { id: 5, title: "Liceo Virgilio - Esterni", description: "Intervento sulle facciate...", fullDescription: "Intervento sulle facciate esterne del Liceo Virgilio con tinteggiatura resistente agli agenti atmosferici.", image: Lavoro4 },
    { id: 6, title: "Liceo Virgilio - Interni", description: "Interventi di colorazione e manutenzione...", fullDescription: "Interventi di colorazione e manutenzione interna, per ambienti luminosi e moderni...", image: Lavoro5 },
    { id: 7, title: "Rivestimento e pittura", description: "Ristrutturazione di edifici residenziali...", fullDescription: "PALAZZINA: intervento ciclo armato + intonachino. VILLETTA: rivestimento a cappotto decorativo. CONDOMINIO: completato con pittura al quarzo", image: Lavoro6 },
  ];

  const openOverlay = (card) => {
    setSelectedCard(card);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedCard(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-12 px-4"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Alcuni dei nostri lavori
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-64 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {card.description}
              </p>
              <button
                onClick={() => openOverlay(card)}
                className="inline-block px-4 py-2 bg-main text-white font-semibold rounded-lg shadow-md hover:bg-dark-main transition duration-300 ease-in-out"
              >
                Apri immagine
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOverlayOpen && selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeOverlay}
        >
          <motion.div
            className="relative bg-white p-8 rounded-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <img
              className="w-full h-96 object-cover rounded mb-4"
              src={selectedCard.image}
              alt={selectedCard.title}
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              {selectedCard.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedCard.fullDescription}</p>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Portfolio;