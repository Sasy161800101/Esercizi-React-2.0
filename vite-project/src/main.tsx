// Crea una nuova applicazione React con vite e rimuovi tutto il codice all'interno della cartella src.
// Scrivi un componente funzione Hello che renderizza il messaggio "Hello, World!" all'interno di un tag h2.
// Scrivi un componente funzione chiamato App che renderizza il componente Hello all'interno di un tag div.
// Crea un nuovo file main.tsx all'interno della cartella src e renderizza il componente App usando la funzione createRoot e il metodo render sull'oggetto radice creato.
// Avvia l'applicazione con il comando npm run dev e apri l'applicazione nel tuo browser.
// Modifica il componente Hello in modo che mostri un tag p sotto il tag h2 con il messaggio "What a beautiful day!".
// Estrai il messaggio "What a beautiful day!" in un nuovo componente chiamato Message e renderizzalo all'interno del componente Hello.
// Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?
// Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
