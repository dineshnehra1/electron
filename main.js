const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow({height: 220, width: 700, frame:false , show:false, webPreferences: {
        nodeIntegration: true, 
        webSecurity:false
      }});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win=null;
    })
    win.once('ready-to-show', () => {
        win.show();
    })
}

app.on('ready', createWindow)