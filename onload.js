console.log("onload Script running");

console.log("FIRE");
let overlay = document.getElementById('idOverlay');
overlay.style.display = 'block';
setTimeout(() => {
  overlay.style.opacity = 0;
  overlay.style.transition = 'opacity 1s';
  overlay.addEventListener('transitionend', () => {
    overlay.style.display = 'none';
  });
}, 10);

console.log("onload Script finished");
