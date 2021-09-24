const { app, BrowserWindow } = require('electron')
const szerver = require('./server.js')
const path = require('path');

szerver.szerverInditas()
let ablak
app.on('ready', () => {
    ablak = new BrowserWindow({
        width: 1000,
        height: 650,
        title: 'Hültár',
        resizable: false
    })

    ablak.setIcon(path.join(__dirname, 'public/kepek/ikon.ico'))
    ablak.loadURL('http://localhost:8585')
    ablak.webContents.openDevTools()
    ablak.removeMenu()
})


app.on('window-all-closed', () => {
    app.quit()
})