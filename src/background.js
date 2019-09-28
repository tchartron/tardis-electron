'use strict'

import { app, protocol, BrowserWindow } from 'electron'
const ipcMain = require('electron').ipcMain
const chokidar = require("chokidar")
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
    nodeIntegration: true,
    webSecurity: false
  } })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
  await installVueDevtools()
} catch (e) {
  console.error('Vue Devtools failed to install:', e.toString())
}

  }
  createWindow()
})

//Filesystem watch
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
//IPC communication
var watcher = null
ipcMain.on('ping', (eventIpc, data) => {
    watcher = chokidar.watch(data, {
          ignored: (path) => contains(path, ignoredPaths),
          persistent: true
      });

    watcher.on('ready', () => {
        eventIpc.sender.send('ready')
    })

    watcher.on('all', (event, path) => {
        eventIpc.sender.send('pong', {
            'event': event,
            'path': path
        })
    })
})

ipcMain.on('stop', (eventIpc, data) => {
    console.log("watcher stopped")
    watcher.close(); //watcher contex
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
