const connected = document.querySelector('.connected');
const serverConnect = document.querySelectorAll('.serverConnect');
const settingsIcon = document.querySelector('.settings');
const settingsPanel = document.querySelector('.settingsPanelC');
const settingsClose = document.querySelector('.settingsClose');

connected.addEventListener("mouseover", function() {
    connected.innerHTML = "DISCONNECT";
    connected.onmouseout = () => {
        connected.innerHTML = "CONNECTED";
    };
});

settingsIcon.addEventListener("click", (e) => {
    if(!settingsPanel.classList.contains("show")) {
        settingsPanel.classList.toggle("show");
    }
});

settingsClose.addEventListener("click", (e) => {
    if(settingsPanel.classList.contains("show")) {
        settingsPanel.classList.toggle("show");
    }
});