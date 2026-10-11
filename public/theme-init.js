// Runs before first paint so a saved light/dark choice doesn't flash the wrong theme.
(function () {
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  } catch {
    // Storage can be blocked (private mode); the OS preference applies instead.
  }
})();
