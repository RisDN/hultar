
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

function szerverInditas() {

    app.set('views', './views')
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/kinyitva', (req, res) => {
        res.render('kinyitva')
    })  

    app.get('/lista', (req, res) => {
        res.render('lista')
    })


    app.listen(8585, '0.0.0.0')

}
module.exports = { szerverInditas };