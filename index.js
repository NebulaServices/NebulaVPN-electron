const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const publicDirectory = __dirname + "/public/"

const login = () => {
  const login = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 850,
    darkTheme: true,
    roundedCorners: true,
    thickFrame: false,
    backgroundColor: '#000000',
    title: "NebulaVPN Login",
    scrollBounce: true,
    show: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(publicDirectory, 'preload.js'),
    },
    icon: path.join(__dirname, 'favicon.ico'),
  });
  login.setMenuBarVisibility(false);
  login.loadFile(path.join(publicDirectory, 'login.html'));

  login.webContents.on('did-finish-load', () => {
    login.show();
  });

  ipcMain.on("minimize", () => {
    login.minimize();
  });

  ipcMain.on("maximize", () => {
    if(login.isMaximized()) {
      login.webContents.send("changeIr");
      login.restore();
    } else {
      login.webContents.send("changeImx");
      login.maximize();
    }
  });

  ipcMain.on("close", () => {
    login.close();
  });
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 850,
    darkTheme: true,
    roundedCorners: true,
    thickFrame: false,
    backgroundColor: '#000000',
    title: "NebulaVPN",
    scrollBounce: true,
    show: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(publicDirectory, 'preload.js'),
    },
    icon: path.join(__dirname, 'favicon.ico'),
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(path.join(publicDirectory, 'index.html'));

  // mainWindow.webContents.openDevTools();
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });

  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("maximize", () => {
    if(mainWindow.isMaximized()) {
      mainWindow.webContents.send("changeIr");
      mainWindow.restore();
    } else {
      mainWindow.webContents.send("changeImx");
      mainWindow.maximize();
    }
  });

  ipcMain.on("close", () => {
    mainWindow.close();
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});