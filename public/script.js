const socket = io("https://chat-room-xyan.onrender.com/");

const form = document.getElementById("formInput");
form.addEventListener('submit', e => {
    e.preventDefault();
    const message = document.getElementById("messageInput").value;
    document.getElementById("messageInput").value = "";
    socket.emit("chatToServer", 
        socket.id + " typed: " + message
    ); //send message to server
});

socket.on("chatToClient", dataFromServer => {
    let messages = document.getElementById("messages");
    messages.innerHTML += `<li>${dataFromServer}</li>`;
});