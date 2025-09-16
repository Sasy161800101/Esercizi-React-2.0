interface MessageProps {
    age : number 
}
function Message ({age}: MessageProps){
    return age >=18 ? <p>'Sei maggiorenne'</p> : <p>'sei troppo giovane!'</p>
}
export default Message 