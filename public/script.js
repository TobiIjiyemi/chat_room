const socket = io("http://localhost:4000");
// socket.on("messageFromServer", data => {
//     console.log(data);
//     socket.emit("messageToServer", {data: socket.id + ", just connected!"});
// } );

const form = document.getElementById("formInput");
form.addEventListener('submit', e => {
    e.preventDefault();
    const message = document.getElementById("messageInput").value;
    socket.emit("chatToServer", {message}); //send message to server
});

socket.on("chatToClient", dataFromServer => {
    let messages = document.getElementById("messages");
    console.log(dataFromServer);
    messages.innerHTML += `<li>${socket.id + ": " + dataFromServer.message}</li>`;
});