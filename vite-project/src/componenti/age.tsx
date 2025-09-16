interface AgeProps {
    age : number 
}
function Age ({age}: AgeProps){
    return <p>La tua eta è {age}</p>
}
export default Age