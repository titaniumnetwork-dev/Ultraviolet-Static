const errorContainer = document.querySelector(".error");
const registerButton = document.querySelector(".register-sw");
let registrarOpen = false;

if (window.location.pathname.startsWith(__uv$config.prefix)) {
  errorContainer.textContent += "The service worker is not registered. Click the button below to register the service worker.";
  registerButton.style.display = "block";
}

function registrarResponse(response) {
  if (response == "success") {
    registerButton.style.display = "none";
    let span = document.createElement("span");
    span.className = "error-green";
    span.textContent = "\n\nSuccess. Reloading now...";
    errorContainer.appendChild(span);
    window.location.reload();
  }
  if (response == "failure")
    errorContainer.textContent += "\n\nFailed to register service worker.";
}

registerButton.onclick = () => {
  if (!registrarOpen) {
    registrarOpen = true;
    let registrarFrame = document.createElement("iframe");
    registrarFrame.style.display = "none";
    registrarFrame.src = "./register-sw.html";
    document.body.appendChild(registrarFrame);
    function messageHandler(event) {
      window.removeEventListener("message", messageHandler);
      registrarFrame.removeAttribute("src");
      document.body.removeChild(registrarFrame);
      registrarOpen = false;
      registrarResponse(event.data);
    }
    window.addEventListener("message", messageHandler);
  }
}
