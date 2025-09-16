// Rendering condizionale
// In un'applicazione React, crea un function component Welcome che riceve una prop name e una prop age.
// Crea un componente Age che riceve una prop age.
// Il componente Welcome deve visualizzare un messaggio "Welcome, {name}!" all'interno di un tag <p> e 5 componenti Age. Per ogni rendering del componente Age, usa il rendering condizionale con una delle seguenti condizioni:
// Il componente Age viene renderizzato solo se la prop age è maggiore di 18.
// // Il componente Age viene renderizzato solo se la prop age è presente.
// Il componente Age viene renderizzato solo se la prop age è maggiore di 18 e minore di 65.
// Il componente Age viene renderizzato solo se la prop age è maggiore di 18 e la prop name è uguale a "John".
// Crea un nuovo componente Message che riceve una prop age e visualizza lo stesso messaggio se la prop è maggiore di 18; in caso contrario, visualizza il messaggio "You are very young!". Renderizza il componente Message all'interno del componente Welcome.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
