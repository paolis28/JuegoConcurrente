// clock.js
let timerId;

onmessage = function(event) {
    const { duration } = event.data; //duración por los segundos

    let timeRemaining = duration;

    timerId = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerId);
            postMessage('time-up');
        } else {
            timeRemaining--;
            // postMessage(`Tiempo restante: ${timeRemaining} segundos`);
            postMessage(`${timeRemaining}`);
        }
    }, 1000); 
};