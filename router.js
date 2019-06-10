const express = require('express')
const router = express.Router()
const User = require('./models/user')
router.get('/', (req, res) => {
    res.render('index.html')
})
router.get('/login', (req, res) => {
    res.render('login.html')
})

router.get('/register', (req, res) => {
    res.render('register.html')
} )
router.post('/register/post', (req, res) => {
    User.find(function (err, ret) {
        console.log(ret)
    })
    console.log(req.body)
    new User(req.body).save((err) => {
        if (err) throw err
    })
})
module.exports = router