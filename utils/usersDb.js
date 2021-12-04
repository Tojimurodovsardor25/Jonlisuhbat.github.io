const userDb = []

const userJoin = (username, mobilnumber, userbiografia, password1, password2, email, room, id) => {
    const user = { username, mobilnumber, userbiografia, password1, password2, email, room, id }

    userDb.push(user)

    return user
}

module.exports = {
    userJoin
}