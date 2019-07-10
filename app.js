// const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow

// // console.log(electron)

// let url
// if (process.env.NODE_ENV === 'DEV') {
//   url = 'http://localhost:8080/'
// } else {
//   url = `file://${process.cwd()}/dist/index.html`
// }

// app.on('ready', () => {
//   let window = new BrowserWindow({width: 800, height: 600})
//   window.loadURL(url)
// })

const { app, BrowserWindow } = require('electron')
const ipcMain = require('electron').ipcMain
const chokidar = require("chokidar")

let win

function createWindow () {
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true
        }
    })


    if(process.env.NODE_ENV === 'development') {
        // console.log('devv')
        // let load = win.loadFile(`${__dirname}/dist/index.html`).then(() => {
        //     console.log('finished')
        // })
        //On dev use loadUrl to provide webpack watch feature to hot reload the app
        let load = win.loadURL('http://localhost:8182/').then(() => {
            // console.log('finished')
        })
        // console.log(win.loadFile('dist/index.html'))
    } else if (process.env.NODE_ENV === 'production') {
        // console.log('prodd')
        // console.log(win.loadFile('dist/index.html')) //was loading : file:///home/thomas/dev/javascript/electron/timeinator-electron/node_modules/electron/dist/resources/default_app.asar/dist/index.html
        let load = win.loadFile(`${__dirname}/dist/index.html`).then(() => {
            // console.log('finished')
        })
    }

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

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
// let hasPath = false;
ipcMain.on('ping', (eventIpc, data) => {
    // console.log('ping received')
    this.watcher = chokidar.watch(data, {
          ignored: (path) => contains(path, ignoredPaths),
          persistent: true
      });

    this.watcher.on('all', (event, path) => {
        // console.log(event, path);
        eventIpc.sender.send('pong', {
            'event': event,
            'path': path
        })

    })
})

ipcMain.on('stop', (eventIpc, data) => {
    this.watcher.close(); //watcher context
    // console.log('stop from main process')
})
