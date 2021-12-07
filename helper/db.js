const mongoose = require('mongoose')
const URI = 'mongodb+srv://sardortojimuradov:v9t73Ua43co5b4pi@cluster0.hhgwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
    try {
        await mongoose.connect(URI)
        const db = mongoose.connection

        db.on('error', console.error.bind(console, "Console error"))
        db.once('open', function () {
            console.log('MongoDb succes connected')
        })
    } catch (error) {
        console.log(error);
    }
}
