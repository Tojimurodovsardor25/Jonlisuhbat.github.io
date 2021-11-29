const socket = require('socket.io')
const io = socket()

io.on('connection', (socket) => {
    console.log('Socket io is working...');

    socket.emit('message', 'Welcom to socket io')
})

module.exports = io