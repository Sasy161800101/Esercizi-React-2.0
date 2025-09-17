 interface CounterDisplayProp {
    counter  : number 
 }
 
 
 export function CounterDisplay ({counter} : CounterDisplayProp){
   return   <h2>{counter}</h2>
}