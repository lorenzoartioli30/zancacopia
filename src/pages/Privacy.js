import React from 'react';

function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 sm:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6">
          La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando utilizzi il nostro sito web.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">2. Dati raccolti</h2>
            <p className="text-gray-700 mb-2">
              Durante la navigazione sul nostro sito web, potrebbero essere raccolti i seguenti dati:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Dati di navigazione: indirizzo IP, tipo di browser, data e ora di accesso, informazioni sul dispositivo utilizzato per accedere al sito.</li>
              <li>Cookie: Il nostro sito utilizza cookie tecnici per migliorare la tua esperienza di navigazione.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">3. Servizi di terze parti</h2>
            <p className="text-gray-700">
              Il nostro sito è ospitato su Vercel, una piattaforma che gestisce l'infrastruttura e l'hosting del sito. Vercel potrebbe raccogliere automaticamente alcuni dati come l'indirizzo IP per motivi tecnici e di sicurezza. Per maggiori informazioni, consulta la Privacy Policy di Vercel.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">4. Utilizzo dei dati</h2>
            <p className="text-gray-700">
              I dati raccolti vengono utilizzati esclusivamente per il funzionamento tecnico del sito, per garantire la sicurezza e per migliorare la navigazione. Non utilizziamo i tuoi dati per scopi pubblicitari.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">5. Conservazione dei dati</h2>
            <p className="text-gray-700">
              I dati raccolti, come l'indirizzo IP, vengono conservati per il tempo strettamente necessario per motivi tecnici e di sicurezza.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">6. Diritti dell'utente</h2>
            <p className="text-gray-700">
              Hai il diritto di accedere ai tuoi dati personali, richiederne la correzione o la cancellazione.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">7. Modifiche alla privacy policy</h2>
            <p className="text-gray-700">
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data dell'ultimo aggiornamento. 04/11/2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
