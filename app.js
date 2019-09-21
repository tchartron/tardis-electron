const { app, BrowserWindow } = require('electron')
const ipcMain = require('electron').ipcMain
const chokidar = require("chokidar")
const touchBar = require("./src/services/touchbar")
// import { touchBar } from './src/services/touchbar' // no webpack here so no import

let win

function createWindow () {
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            webSecurity: false, //for CORS
            nodeIntegration: true //for require('electron') at runtime in renderer process (main.js)
        }
    })

    //     //On dev use loadUrl to provide webpack watch feature to hot reload the app
    if(process.env.NODE_ENV === 'development') {
        let load = win.loadURL('http://localhost:8182/').then(() => {})
        win.webContents.openDevTools()
    } else if (process.env.NODE_ENV === 'production') {
        let load = win.loadFile(`${__dirname}/dist/index.html`).then(() => {})
    }

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    createWindow()
    win.setTouchBar(touchBar)
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

function contains(target, pattern){
    var value = 0;
    pattern.forEach((word) => {
      value += target.includes(word);
    });
    return (value === 1)
}

let ignoredPaths = [
    'node_modules',
    'vendor'
]

//Events
ipcMain.on('ping', (eventIpc, data) => {
    this.watcher = chokidar.watch(data, {
          ignored: (path) => contains(path, ignoredPaths),
          persistent: true
      });

    this.watcher.on('ready', () => {
        eventIpc.sender.send('ready')
    })

    this.watcher.on('all', (event, path) => {
        eventIpc.sender.send('pong', {
            'event': event,
            'path': path
        })
    })
})

ipcMain.on('stop', (eventIpc, data) => {
    console.log("watcher stopped")
    this.watcher.close(); //watcher contex
})
