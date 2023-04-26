console.log("onload Script running");

function salida(url){
    console.log("FIRE");
    let overlay = document.getElementById('idExitOverlay');
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = 1;
        overlay.style.transition = 'opacity 1s';
        overlay.addEventListener('transitionend', () => {
            console.log("HIT");
            window.location.href = url;
        });
    }, 10);
}

console.log("onload Script finished");