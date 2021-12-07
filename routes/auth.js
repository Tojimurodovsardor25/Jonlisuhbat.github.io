const { Router } = require('express')
const Admin = require('../models/Admin')
const router = Router();
const fileUpload = require("../middleware/fileUpload.js");
const bcrypt = require("bcryptjs");

router.get('/login', (req, res) => {
    res.render('auth/login', {
        title: 'Login'
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('auth/login')
    })
})