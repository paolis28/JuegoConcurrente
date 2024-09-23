// En el archivo despachoWorker.js
self.addEventListener('message', (event) => {
    if (event.data === 'despachar') {
        setTimeout(() => {
            self.postMessage('done');
        }, 1000); 
    }
});
