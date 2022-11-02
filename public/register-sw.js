const stateContainer = document.getElementById("state");

function finish(state) {
  stateContainer.textContent = state;
  console.log("Registering ultraviolet service worker... " + state);
  window.parent.postMessage(state, "*");
}

try {
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      finish("success");
    })
    .catch(() => {
      finish("failure");
    });
} catch (e) {
  finish("failure");
}
