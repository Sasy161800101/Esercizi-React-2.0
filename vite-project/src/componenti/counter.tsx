import { useState } from "react";
import { CounterDisplay } from "./counterDisplay";


interface CounterProp{
    valoreIniziale   : number 
    aumento : number 
}
 export function Counter ({valoreIniziale, aumento} : CounterProp){
const[counter,setCounter] = useState(valoreIniziale)

function  setter (){
    setCounter (counter + aumento) 
}

function decrement(){
    setCounter(counter - aumento)
}
function reset (){
    setCounter(valoreIniziale)
}
return (
    <>
    <CounterDisplay counter={counter}></CounterDisplay>
    <button onClick = {setter}>Increment</button>
     <button onClick = {decrement}>Decrement</button>
      <button onClick = {reset}>Reset</button>
    </>
)
}

// Meglio utilizzare la funzione in setCounter cosi si prende sempre il valore recente di counter evitando bug 