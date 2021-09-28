const { app, BrowserWindow } = require('electron')
const szerver = require('./server.js')
const path = require('path');

szerver.szerverInditas()
let ablak, betoltoAblak
app.on('ready', () => {
    ablak = new BrowserWindow({
        width: 1000,
        height: 650,
        title: 'Hültár',
        resizable: false,
        show: false
    })

    ablak.setIcon(path.join(__dirname, 'public/kepek/ikon.ico'))
    ablak.loadURL('http://localhost:8585')
   //ablak.webContents.openDevTools()
    ablak.removeMenu()


    betoltoAblak = new BrowserWindow({
        width: 500,
        height: 470,
        title: 'Hültár',
        resizable: false,
        show: true,
        frame: false
    })

    betoltoAblak.setIcon(path.join(__dirname, 'public/kepek/ikon.ico'))
    betoltoAblak.loadURL(path.join(__dirname, 'public/views/betolto.html'))
    //betoltoAblak.webContents.openDevTools()
    betoltoAblak.removeMenu()


    setTimeout(function() {
        betoltoAblak.close()
        ablak.show()
    }, 3500)
    app.setAppUserModelId('Hültár')

})


app.on('window-all-closed', () => {
    app.quit()
})