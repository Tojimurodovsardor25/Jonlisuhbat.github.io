const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    adminAvatar: {
        type: String,
    }
})

module.exports = model('admin', adminSchema)