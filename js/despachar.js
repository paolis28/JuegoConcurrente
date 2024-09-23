document.addEventListener('DOMContentLoaded', () => {
    const despacharButton = document.getElementById('despachar');
    const charola = document.getElementById('charola');
    const foodItems = document.getElementById('food-items');
    const message = document.getElementById('message');
  
    if (window.Worker) {
        const worker = new Worker('./workers/charola.js');

        despacharButton.addEventListener('click', () => {
            worker.postMessage('despachar');
            message.textContent = 'Despachando orden...';

            worker.addEventListener('message', (event) => {
                if (event.data === 'done') {
                    charola.style.display = 'none';
                    foodItems.innerHTML = '';
                    message.textContent = '¡Orden despachada con éxito!';
                    setTimeout(() => {
                        charola.src = './assets/img/charola.png';
                        charola.style.display = ''; 
                        message.textContent = ''; 
                    }, 1000);
                }
            });
        });
    } else {
        alert("Error en el navegador");
        console.error('Tu navegador no soporta Web Workers.');
    }
  });