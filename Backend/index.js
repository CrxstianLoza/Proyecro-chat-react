const http = require('http')

const server = http.createServer()

const io = require('socket.io')(server,{

    cors: {
        origin: '*'
    }
})

io.on('connection', (Socket)=>{
    console.log("Conectado al servidor");
})

server.listen(3000)