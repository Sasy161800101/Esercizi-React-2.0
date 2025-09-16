import Age from "./age"
import Message from "./message"

interface WelcomeProps{
    name : string 
    age : number 
}


function Welcome ({name , age } : WelcomeProps){
return <>
<p>Welcome ! {name} </p>
{age >18 && <Age age = {age}></Age>}
{age && <Age age = {age}></Age>}
{age >18 && age <65 && <Age age = {age}></Age>}
{age >18 && name === 'john' &&<Age age = {age}></Age>}
{<Age age = {age}></Age>}
<Message age =  {age}></Message>

</>
}
export default Welcome 