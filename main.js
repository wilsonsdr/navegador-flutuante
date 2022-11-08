const { app, BrowserWindow } = require("electron");

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    alwaysOnTop: true,
    autoHideMenuBar: true,
  });

  win.loadURL("http://localhost:3000/");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
