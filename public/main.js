const connected = document.querySelector('.connected');
const serverConnect = document.querySelectorAll('.serverConnect');
const settingsIcon = document.querySelector('.settings');
const settingsPanel = document.querySelector('.settingsPanel');
const settingsClose = document.querySelector('.settingsClose');
const header = document.querySelector("header.window-drag");

document.body.oncontextmenu = function (e) {
    contextMenu.innerHTML = `
      <ul class="contextList">
        <li class="contextItem">Minimize</li>
        <li class="contextItem">Maximize</li>
        <li class="contextItem windowClose">Close</li>
      </ul>
    `;
    if(e.clientX < window.innerWidth - contextMenu.offsetWidth && e.clientY < window.innerHeight - contextMenu.offsetHeight) {
      contextMenu.style.left = e.clientX + "px";
      contextMenu.style.top = e.clientY + "px";
    } else {
      contextMenu.style.left = window.innerWidth - contextMenu.offsetWidth + "px";
      contextMenu.style.top = window.innerHeight - contextMenu.offsetHeight + "px";
    }
    document.body.appendChild(contextMenu);
}

const contextMenu = document.createElement("div");
contextMenu.classList.add("contextMenu");

header.addEventListener("mousedown", (e) => {
  if(e.button === 2) {
    contextMenu.innerHTML = `
      <ul class="contextList">
        <li class="contextItem">Minimize</li>
        <li class="contextItem">Maximize</li>
        <li class="contextItem windowClose">Close</li>
      </ul>
    `;
    contextMenu.style.left = e.clientX + "px";
    contextMenu.style.top = e.clientY + "px";
    document.body.appendChild(contextMenu);
  }
})

connected.addEventListener("mouseover", function() {
    connected.innerHTML = "DISCONNECT";
    connected.style.backgroundColor = "#f97474";
    connected.style.color = "#ffffff";
    connected.onmouseout = () => {
        connected.style.backgroundColor = "#9FFF8F";
        connected.style.color = "#4F9E42";
        connected.innerHTML = "CONNECTED";
    };
});

settingsIcon.addEventListener("click", (e) => {
    settingsPanel.classList.toggle("show");
    if(settingsPanel.classList.contains("show")) {
        header.style.borderRadius = "0";
    } else if(!settingsPanel.classList.contains("show")) {
        header.style.borderRadius = "0px 0px 8px 8px";
    }
});

settingsClose.addEventListener("click", (e) => {
    settingsPanel.classList.toggle("show");
    if(!settingsPanel.classList.contains("show")) {
        header.style.borderRadius = "0px 0px 8px 8px";
    }
});