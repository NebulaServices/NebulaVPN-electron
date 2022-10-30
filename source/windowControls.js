const { ipcRenderer } = require('electron');
const minimize = document.querySelector('.winBtnMin');
const maximize = document.querySelector('.winBtnMax');
const close = document.querySelector('.winBtnClose');

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