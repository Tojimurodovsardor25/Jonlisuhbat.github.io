const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Admin = require('../models/Admin')


router.get('/', auth, async function (req, res) {
    const admin = await Admin.find()


    res.render('admin/index', {
        layout: 'main',
        admin
    })
})

module.exports = router