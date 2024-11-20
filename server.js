const express = require('express');
const app = express();

app.use(express.static('./public'));
const expressServer = app.listen(4000);

const socketio = require('socket.io');
const io = socketio(expressServer, {
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

