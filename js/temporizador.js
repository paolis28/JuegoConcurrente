const clockButton = document.getElementById('clock');
const worker = new Worker('./workers/clock.js');

let isTimerRunning = false;

clockButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        const duration = 10; // tiempo a dar al jugador
        worker.postMessage({ duration });
        isTimerRunning = true;
        clockButton.querySelector('label').innerText = 'Detener';
        clockButton.disabled = true; 
    } else {
        // worker.postMessage('stop'); 
        isTimerRunning = false;
        clockButton.querySelector('label').innerText = 'Iniciar';
    }
});

worker.onmessage = function(event) {
    if (event.data === 'time-up') {
        alert('¡Tiempo agotado!');
        // bloqueando todo el juego
        document.querySelectorAll('.blockable').forEach(el => {
            el.disabled = true; 
        });
        isTimerRunning = false;
        clockButton.querySelector('label').innerText = 'Iniciar';
        clockButton.disabled = false; 
    } else {
        console.log(event.data); 
        document.getElementById('clockDisplay').innerText = event.data;
    }
};
