const socket = io("http://localhost:4000");
socket.on("messageFromServer", data => {
    console.log(data);
    socket.emit("messageToServer", {data: socket.id + ", just connected!"});
} );