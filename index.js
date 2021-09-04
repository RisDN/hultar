const { app, BrowserWindow } = require('electron')
const szerver = require('./server.js')

szerver.szerverInditas()
let ablak
app.on('ready', () => {
    ablak = new BrowserWindow({
        width: 850,
        height: 550,
        title: 'Hültár'
    })
    ablak.loadURL('http://localhost:8585')
    ablak.webContents.openDevTools()
    ablak.removeMenu()
})


app.on('window-all-closed', () => {
    app.quit()
})