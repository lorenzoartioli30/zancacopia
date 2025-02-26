import React, { useState } from 'react';
import Send from '../assets/send.svg';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="px-2 bg-white md:px-0"
    >
      <section>
        <div className="lg:w-1/2 w-full bg-white flex flex-col mx-auto md:py-8 mt-8 md:mt-0 max-w-lg">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Entriamo in contatto
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Compila tutti i campi del form per richiedere un preventivo o invia una email a <a href='mailto:zanca.snc@gmail.com' className="text-red-500 leading-relaxed">zanca.snc@gmail.com</a>
          </p>
          <form onSubmit={handleSubmit}
          >
          
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
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
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
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
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Messaggio</label>
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
        </div>
      </section>
      {notification.message && (
        <div className={`py-2 px-4 rounded-md text-white text-center fixed bottom-4 right-4 flex gap-4 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          <p>{notification.message}</p>
          <span className="cursor-pointer font-bold" onClick={() => setNotification({ message: '', type: '' })}><sup>X</sup></span>
        </div>
      )}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">
                Dove ci trovi?
            </h2>
            </div>
            <div className="mt-8 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-bold text-gray-900">Contatti</h3>
                    <p className="mt-1 text-gray-900">
                        <a href="tel:+390376398705">Tel: 0376 398705</a>
                    </p>
                    <p className="mt-1 text-gray-900">
                        <a href="mailto:zanca.snc@gmail.com">Email: zanca.snc@gmail.com</a>
                    </p>
                    </div>
                    <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Indirizzo</h3>
                    <p className="mt-1 text-gray-600">
                        Via G. Verdi, 3 • 46047 Porto Mantovano (MN)
                    </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Orari</h3>
                    <p className="mt-1 text-gray-600">Lunedì - Venerdì : 8-12 14-18</p>
                    </div>
                </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first">
                
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41150.92388187126!2d10.744439558041588!3d45.18902227077895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781d6cf637f6b01%3A0x6a530cb061c317d0!2sZanca%20Enzo%20%26%20Giannino!5e0!3m2!1sit!2sit!4v1730199178493!5m2!1sit!2sit"
                    className="w-full"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              
                </div>
            </div>
            </div>
        </div>
        </section>
    </motion.section>
  );
}

export default Contact;
