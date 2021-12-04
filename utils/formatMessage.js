const moment = require('moment')

const formatMessage = (username, text, room) => {
    const time = moment().format('h:mm:ss')

    return {
        username,
        text,
        time,
        room
    }
}

module.exports = formatMessage