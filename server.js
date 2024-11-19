const express = require('express');
const app = express();

app.use(express.static('public'));
const expressServer = app.listen(4000);

const socketio = require('socket.io');
const io = socketio(expressServer, {
    //cors
    //auth
    //query
});

io.on('connection', socket => {
    socket.emit("messageFromServer", {data: "Welcome to the socketio server"});
});

