import React from 'react';
import Arrow from '../assets/arrow-right (1).svg'
import Sede from '../assets/logo2gianca.webp'
import Sede2 from '../assets/logo3gianca.webp'
import { motion } from 'framer-motion';
import Landscape from '../assets/provasfondo.jpg'
import Send from '../assets/send.svg'
import { Link } from 'react-router-dom';
import Lavoro1 from '../assets/lavoro1.webp'
import Lavoro2 from '../assets/lavoro2.webp'
import Lavoro3 from '../assets/lavoro3.jpg'
import Lavoro4 from '../assets/lavoro4.webp'
import Lavoro5 from '../assets/lavoro5.webp'
import Lavoro6 from '../assets/lavoro6.webp'
import Jobs from '../components/Jobs';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Bagnolo from '../assets/primaedopobagnolo.png'
import ArrowUp from '../assets/arrow-up-circle.svg'

const Home = () => {
    const cards = [
        { title: "Rimozione della muffa", subtitle: "Villetta a Bagnolo San Vito", image: Bagnolo },
        { title: "La boiserie", subtitle: "Tecnica decorativa", image: Lavoro1 },
        { title: "Palazzo Siliprandi", subtitle: "Idropittura minerale ai silicati", image: Lavoro2 },
        { title: "Centro storico", subtitle: "Ripristino e colorazione dei portici", image: Lavoro3 },
        { title: "Liceo Virgilio", subtitle: "Esterni", image: Lavoro4 },
        { title: "Liceo Virgilio", subtitle: "Interni", image: Lavoro5 },
        { title: "Rivestimento e pittura", subtitle: "Palazzina, villetta e condominio", image: Lavoro6 }
    ];
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [notification, setNotification] = useState({ message: '', type: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .send('service_amuw56p', 'template_raepi9x', formData, 'FvDbif01hlbcqRMjh')
        .then((response) => {
          setNotification({ message: 'Messaggio inviato con successo!', type: 'success' });
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setNotification({ message: '', type: '' }), 4000);
        })
        .catch((err) => {
          setNotification({ message: 'Si è verificato un errore. Riprova più tardi.', type: 'error' });
          setTimeout(() => setNotification({ message: '', type: '' }), 4000);
        });
    };
  return (
    <div style={{
        backgroundImage: `url(${Sede})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Questa proprietà mantiene l'immagine fissa durante lo scroll
      }}>
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Imposta i valori iniziali
      animate={{ opacity: 1, y: 0 }} // Imposta i valori finali
      transition={{ duration: 1 }} // Durata dell’animazione in secondi
      className="md:px-0"
    >
    <section className=" py-20 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full"> {/*  md:w-1/2 md:px-3 */}
          <div className="flex justify-center items-center bg-white4 bg-opacity-90 rounded p-4">
            <div className="flex">
                <div className="text-center ">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl md:text-4xl">
                    <span className="block xl:inline">
                    <span className="mb-1 block">Artigiana coloriture</span>
                    <span className="bg-gradient-to-r from-main to-dark-main bg-clip-text text-transparent">
                        dal 1976
                    </span>
                    </span>
                    <div className="mt-2">
                    <span className="relative mt-3 whitespace-nowrap text-main">
                        <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none"
                        >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                        </svg>
                        <span className="text-2xl relative">civili • industriali • restauro</span>
                    </span>
                    </div>
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
                    decorazioni-velatura • spatolatura mantovana • bio pittura ionizzante • tappezzerie • pavimenti in resina •
                     rivestimento cappotto • recupero cemento armato • protezione legno e metalli
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                    <div className="rounded-md shadow">
                    <Link to='/contatti'
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-main px-8 py-3 text-base font-medium text-white hover:bg-dark-main md:py-4 md:px-10 md:text-lg transition-colors duration-300"
                        href="#"
                        >
                        Richiedi subito un preventivo <img className="w-5 h-5 ml-3" src={Arrow} />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </div>
          {/*
            <div className="w-full md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-md shadow-2xl sm:rounded-xl">
            <img src={Sede} />
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
    <section className="overflow-hidden whitespace-nowrap bg-slate-200 py-8 bg-opacity-80">
        <div className="flex animate-marquee">
            {cards.concat(cards).map((card, index) => (
                <article key={index} className="relative isolate flex-shrink-0 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mx-2" style={{ width: '20rem' }}>
                    <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <h3 className="z-10 mt-3 text-2xl font-bold text-white">{card.title}</h3>
                    <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300">
                        {card.subtitle}
                    </div>
                </article>
            ))}
        </div>

        <div className="flex justify-center mt-6 relative px-4">
            <Link 
                to='portfolio'
                className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
            >
                Mostra tutti i lavori <img className="w-5 h-5 ml-3" src={Arrow} />
            </Link>
        </div>
    </section>
<div>
  <Jobs></Jobs>
  <section className="text-gray-600 body-font relative py-8">
  <div className="container max-w-5xl px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-white rounded-lg">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41150.92388187126!2d10.744439558041588!3d45.18902227077895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781d6cf637f6b01%3A0x6a530cb061c317d0!2sZanca%20Enzo%20%26%20Giannino!5e0!3m2!1sit!2sit!4v1730199178493!5m2!1sit!2sit"
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              INDIRIZZO
            </h2>
            <p className="mt-1">
                Via G. Verdi, 3 <br></br>46047 Porto Mantovano (MN)
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a href='mailto:zanca.snc@gmail.com' className="text-red-500 leading-relaxed">zanca.snc@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              TELEFONO
            </h2>
            <a href='tel:+390376398705' className="leading-relaxed">0376 398705</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Entriamo in contatto
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Compila tutti i campi del form per richiedere un preventivo o invia una mail a <a href='mailto:zanca.snc@gmail.com' className="text-red-500 leading-relaxed">zanca.snc@gmail.com</a>
        </p>
        <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-dark-main focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-dark-main focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-dark-main focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-main px-8 py-3 text-base font-medium text-white hover:bg-dark-main md:py-4 md:px-10 md:text-lg transition-colors duration-300"
            type="submit"
            >
            Invia <img className="w-5 h-5 ml-3" src={Send} />
        </button>
        </form>
        <p className="text-xs text-gray-500 mt-3">
          Clicca su invia per mandare la richiesta di preventivo
        </p>
      </div>
    </div>
  </section>
  {notification.message && (
        <div className={`py-2 px-4 rounded-md text-white text-center fixed bottom-4 right-4 flex gap-4 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          <p>{notification.message}</p>
          <span className="cursor-pointer font-bold" onClick={() => setNotification({ message: '', type: '' })}><sup>X</sup></span>
        </div>
      )}
    </div>

    </motion.section>
    </div>
  );
};

export default Home;
