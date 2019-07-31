const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('./src/index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});