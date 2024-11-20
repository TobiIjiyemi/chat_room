const express = require('express');
const app = express();
const cors = require("cors"); //deciding what domains are acceptable.

app.use(express.static('./public'));

// use the port environment variable provided by render
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
    "http://localhost:4000",
    "https://chat-room-xyan.onrender.com/"
];

app.use(cors({
    origin: allowedOrigins
}));

const expressServer = app.listen(PORT);

const socketio = require('socket.io');
const io = socketio(expressServer, {
    cors: {
        origin: allowedOrigins
    }
    //cors
    //auth
    //query
});

io.on('connection', socket => {
    //for each connection output "Welcome to the socketio server"
    socket.emit("messageFromServer", {data: "Welcome to the socketio server"});

    // //listen for messageToServer, see what each socket wants to send back
    // socket.on("messageToServer", dataFromClient => {
    //     console.log(dataFromClient);
    // });
    
    socket.on("chatToServer", dataFromClient => {
        io.emit("chatToClient", dataFromClient);
     });
});

