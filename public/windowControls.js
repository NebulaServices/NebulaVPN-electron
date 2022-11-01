const { ipcRenderer } = require('electron');
const minimize = document.querySelector('.winBtnMin');
const maximize = document.querySelector('.winBtnMax');
const close = document.querySelector('.winBtnClose');
const openLog = document.querySelector('.openLog');

minimize.addEventListener('click', () => {
    console.log('minimize');
    ipcRenderer.send('minimize');
});
maximize.addEventListener('click', () => {
    ipcRenderer.send('maximize');
});
close.addEventListener('click', () => {
    ipcRenderer.send('close');
});
openLog.addEventListener("click", () => {
    ipcRenderer.send('openLog');
})