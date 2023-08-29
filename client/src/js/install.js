const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered event for later use
  window.deferredPrompt = event;
  // Show the installation button by removing the hidden class
  butInstall.classList.toggle("hidden", false);
});
butInstall.addEventListener("click", async () => {
  // Retrieve the stored prompt event
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  // Reset the deferred prompt variable as it can only be used once
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
