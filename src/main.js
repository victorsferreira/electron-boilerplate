const { 
  app, BrowserWindow, 
  Tray, Menu 
} = require('electron');

let win;
let tray = null;

global.someGlobalVariable = "Vendor Team";

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('./src/index.html');

  win.on('closed', () => {
    win = null
  });

  win.webContents.openDevTools();

  tray = new Tray('./build/icons/512x512.png');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Item 1', type: 'radio', click: () => { 
        console.log("Item");
      }
    }
  ]);
  tray.setContextMenu(contextMenu);
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});