const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('suhbat', {
        title: 'Suhbat',
        layout: 'layout'
    })
})

module.exports = router