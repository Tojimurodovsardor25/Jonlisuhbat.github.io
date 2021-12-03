const userDb = []

const userJoin = (username, mobilnumber, userbiografia, password1, password2, email, id) => {
    const user = { username, mobilnumber, userbiografia, password1, password2, email, id }

    userDb.push(user)

    return user
}

module.exports = {
    userJoin
}