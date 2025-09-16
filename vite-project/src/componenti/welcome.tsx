import Age from "./age"

type WelcomeProp ={
    name? : string 
    age : number 
}

function Welcome ({name = 'x' , age } :WelcomeProp){
     return <>
     <p>Welcome! <strong>{name}</strong> </p>
     <Age age = {age} ></Age>
     </>
}
export default Welcome 