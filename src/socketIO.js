const socket = require('socket.io')
const io = socket()
const formatMessage = require('../utils/formatMessage')
const { userJoin } = require('../utils/usersDb')

io.on('connection', (socket) => {
    console.log('Socket io is working...');

    socket.on('joinRoom', (user) => {
        socket.emit(
            'message',
            formatMessage('Suhbat staff', 'Suhbat rasmiy sahifasiga hush kelibsiz'))
        const userQuery = userJoin(user.username, user.mobilnumber, user.userbiografia, user.password1, user.password2, user.email, socket.id)

        socket.join(userQuery.room)

        socket.broadcast.emit('joined',
            formatMessage('Suhbat staff', `${userQuery.username} Suhbatda mavjud`))

    })

    socket.on('disconnect', () => {
        io.emit('chiqish', formatMessage('Suhbat staff', 'Suhbat rasmiy sahifasiga hush kelibsiz'))
    })

    socket.on('message', (msg) => {
        console.log(msg);
        io.emit('message', formatMessage('User', msg))
    })

})

module.exports = io