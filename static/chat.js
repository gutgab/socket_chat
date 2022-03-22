const socket = io();
const btnEnviar = document.getElementById("btn_enviar");
const inputEnviar= document.getElementById("entrada");
const ventanaChat = document.querySelector(".chat-ventana");

const enviarMsg = ()=>{
    if(inputEnviar.value!=""){
        socket.send(inputEnviar.value);
        let div = document.createElement("div")
        div.textContent= inputEnviar.value;
        div.classList.add("msg")
        ventanaChat.appendChild(div);
        inputEnviar.value = "";
    }
}

btnEnviar.addEventListener("click",enviarMsg);
inputEnviar.addEventListener("focus",()=>{
    inputEnviar.addEventListener('keyup',(e)=>{
        if(e.key == "Enter"){
            enviarMsg();
        }
    })
})
socket.on("message",(msg)=>{
    if(msg!=""){
        let div = document.createElement("div")
        div.textContent= msg;
        div.classList.add("msg-recibido")
        ventanaChat.appendChild(div);
    }
})