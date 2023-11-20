const ws = require("ws");
const server = new ws.server({port:'3000'});

server.on("connect", socket => {
    socket.on('message', message => {
        socket.send(`${message}`);
        console.log(message);
    })
})