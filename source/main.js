const connected = document.querySelector('.connected');
const serverConnect = document.querySelectorAll('.serverConnect');
const settingsIcon = document.querySelector('.settings');
const settingsPanel = document.querySelector('.settingsPanelC');

connected.addEventListener("mouseover", function() {
    connected.innerHTML = "DISCONNECT";
    connected.onmouseout = () => {
        connected.innerHTML = "CONNECTED";
    };
});

settingsIcon.addEventListener("click", (e) => {
    settingsPanel.classList.toggle("show");
})