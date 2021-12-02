const socket = require('socket.io')
const io = socket()

io.on('connection', (socket) => {
    console.log('Socket io is working...');

    // socket.emit('message', 'Suhbat rasmiy sahifasiga hush kelibsiz')

    socket.broadcast.emit('joined', 'Faydalanuvchi online')

    socket.on('message', (data) => {
        console.log(data);
        io.emit('message', data)    
    })
})

module.exports = io