const buttonInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  deferredPrompt = event;
  buttonInstall.classList.remove("hidden");
});

buttonInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the PWA installation prompt.");
    } else {
      console.log("User dismissed the PWA installation prompt.");
    }

    deferredPrompt = null;
    buttonInstall.classList.add("hidden");
  }
});

window.addEventListener("appinstalled", (event) => {
  deferredPrompt = null;
});
