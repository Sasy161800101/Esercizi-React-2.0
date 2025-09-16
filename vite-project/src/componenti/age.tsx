type AgeProp ={
age : number 
}
function Age ({age} : AgeProp){
   return <p>Your age is {age}</p>
}
export default Age 