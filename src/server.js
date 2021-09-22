
const express = require('express')
const app = express()
const path = require ('path');
/*const server = require('http').Server(app)
const io = require('socket.io')(server)*/

function szerverInditas() {

    app.use(express.static(path.join(__dirname + '/public')))
    app.set('views', path.join(__dirname + '/public/views'));

    app.set('view engine', 'ejs')
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