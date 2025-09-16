// In un'applicazione React, crea un componente funzionale Welcome che riceva una prop name e visualizzi il messaggio "Welcome, {name}!" all'interno di un tag <p>.
// Renderizza questo componente nel componente App, passando una prop name a tua scelta. Imposta un valore predefinito per la prop name.
// Aggiungi una seconda prop chiamata age e visualizzala sotto il messaggio di benvenuto, all'interno di un tag <p> dopo il testo "Your age is ".
// 4 .Modifica il valore passato alla prop name in modo che sia contenuto all'interno di un tag <strong>.
// Estrai il messaggio "Your age is " in un nuovo componente chiamato Age e renderizzalo all'interno del componente Welcome. Passa al componente Age la prop age che Welcome sta ricevendo dal componente App.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
