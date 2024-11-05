import React from 'react';
import Pittura from '../assets/pittura.webp';
import Spatolatura from '../assets/logo3gianca.webp';
import Muffa from '../assets/muffa.webp';
import Onorato from '../assets/onorato.webp';
import Legno from '../assets/legno.jpg';
import Bousareie from '../assets/lavoro1.webp';
import PitturaBio from '../assets/pittura.png'

function Jobs() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="py-10 max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">IL LAVORO</p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Di cosa ci<span className="text-main"> occupiamo</span>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover" // Imposta una dimensione uniforme
                src={Pittura}
                alt="Pittura"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    tinteggiatura
                  </a>
                  <p className="text-gray-500 text-sm">Edifici di diverse tipologie, trattati con tinteggiature specialistiche che offrono protezione e resistenza su misura. Tinteggiatura anticarbonatazione per un’efficace protezione dal degrado, pittura elastomerica per sigillare microfessure e garantire l'elasticità delle superfici, pittura al quarzo antialga per combattere l’umidità e le incrostazioni, e rivestimenti siosannici per un’efficace resistenza chimica. Ogni trattamento è progettato per valorizzare l'estetica e la durabilità, adattandosi alle specifiche esigenze dell'edificio e assicurando una lunga vita alle strutture.</p>
                </div>
              </div>
            </div>
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover"
                src={Muffa}
                alt="Muffa"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    anti muffa
                  </a>
                  <p className="text-gray-500 text-sm">La muffa sulle pareti di casa? Dimenticala per sempre con il nostro intervento su misura! Offriamo una soluzione definitiva e personalizzata che va oltre la semplice pulizia. Partiamo da un sopralluogo gratuito per individuare la causa alla radice e proponiamo il trattamento specifico più adatto alla tua abitazione. Affidati a noi: ci occupiamo di tutto, dalla diagnosi alla completa eliminazione della muffa, per garantirti un ambiente sano e protetto.</p>
                </div>
              </div>
            </div>
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover"
                src={Spatolatura}
                alt="Spatolatura"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    La spatolatura mantovana
                  </a>
                  <p className="text-gray-500 text-sm">La Spatolatura mantovana è un prodotto di grassello di calce stemperato colorato con terre naturali anche ossidi, il prodotto si presenta come un colore da stendere a pennello si applica poi viene schiacciato con una semplice spatola data  a 4 mani, l’aspetto si presenta con delle trasparenze e ad effetto marmoreo poi viene dato una mano di cera e si puo lavare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover" // Imposta una dimensione uniforme
                src={Legno}
                alt="Pittura"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    protezione dei manufatti in legno
                  </a>
                  <p className="text-gray-500 text-sm">Si tratta un ciclo costituito da PV33 fondo all'acqua e finiture F3 o F3A disponibile al solvente o all'acqua.
                    Il prodotto testato con le più severe norme europee è marcato "CE" con ETA 15_0424, certificato in classe B s1 d0 di reazione al fuoco, secondo EN 13501, per applicazioni a soffitto o parete.
                    Il ciclo è inoltre certificato secodo norma europea EN 13381-7 per la resistenza al fuoco su travi, pilastri, muri e solette in legno massiccio, lamellare e su pannelli.
                    Nato per applicazioni in ambienti interni è di facile applicazione e dona al legno un aspetto calco e cerato.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover"
                src={Onorato}
                alt="Muffa"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    onorato trasferibile
                  </a>
                  <p className="text-gray-500 text-sm">È un prodotto rivoluzionario perché consente ai nostri artisti decoratori di ambienti, di dipingere comodamente in studio decorazioni che prima dovevano essere eseguite sul posto, con i tempi e le difficoltà connesse.
IL BREVETTO È UNICO NEL SUO GENERE.

È facile da applicare, tecnicamente identico all’applicazione delle tappezzerie, ma quello che viene fissato è unicamente colore proprio come se fosse eseguito direttamente sul muro.
I campi di impiego sono quelli della decorazione d’interni ed esterni, raggiungendo tutte le superfici murarie.
L’esclusività del risultato finale di ornato è identico alla decorazione eseguita tradizionalmente sul posto.</p>
                </div>
              </div>
            </div>
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover"
                src={Bousareie}
                alt="Spatolatura"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    La Boiserie
                  </a>
                  <p className="text-gray-500 text-sm">La Boiserie è una tecnica decorativa consistente nella copertura delle pareti con pannelli di legno, variamente intarsiati, incisi e intagliati.

Il termine Boiserie si sta affermando sempre più nella realizzazione delle finiture d’interni delle case moderne.a parola significa lavorazione del legno e deriva dal francese bois, ovvero legno. Molto popolare in Francia a partire dal secolo XVII, la tecnica cominciò ad essere utilizzata per rivestire pareti, armadi, porte e librerie. È un elemento in grado di arricchire il contenuto della stanza in cui viene utilizzata. Sebbene sia legata ai tempi antichi, nelle case moderne diventa un elemento che dona un tocco di stile e classe all’ambiente. Nell’arredamento moderno, oltre all’utilizzo del più tradizionale legno, sono possibili boiseries in stucco o gesso ceramico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover" // Imposta una dimensione uniforme
                src={Legno}
                alt="Pittura"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    Rivestimenti a cappotto
                  </a>
                  <p className="text-gray-500 text-sm">Col passare del tempo i rivestimenti a cappotto esistenti, creano problemi.
                    <br></br> Vuoi allungare la vita alle tue facciate?<br></br>Ricorda di programmare la manutenzione.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center bg-white">
              <img
                className="w-full h-48 object-cover"
                src={PitturaBio}
                alt="Muffa"
              />
              <div className="p-4">
                <div className="text-md">
                  <a href="#" className="hover:text-indigo-500 uppercase text-gray-900 font-semibold transition duration-500 ease-in-out">
                    biopittura ionizzante
                  </a>
                  <p className="text-gray-500 text-sm">La biopittura ionizzante è una pittura ecologica studiata per offrire una potente azione antimuffa, mantenendo le superfici salubri e prive di umidità. Grazie alla tecnologia ionizzante, questa vernice rilascia ioni negativi che prevengono la formazione di muffe e funghi, bloccando le spore prima che possano attecchire sulle pareti. Ideale per ambienti interni soggetti a umidità, la biopittura ionizzante crea un microclima più sano e pulito, agendo sia come protezione antimuffa sia come purificatore naturale dell’aria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
