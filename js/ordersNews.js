const orderContainer = document.querySelector('.containerMenu');
const maxOrders = 5; 
let orderCounter = 1;


function addOrder() {
    const orderSpan = document.createElement('span');
    const orderLabel = document.createElement('label');
    orderLabel.textContent = `Orden ${orderCounter}`;
    orderSpan.appendChild(orderLabel);
    

    orderSpan.classList.add('slide-in');
    orderSpan.addEventListener('click', () => handleOrderClick(orderSpan));
    orderContainer.appendChild(orderSpan);
    orderCounter++;

    if (orderContainer.children.length > maxOrders) {
      orderContainer.removeChild(orderContainer.firstElementChild);
    }
}


function handleOrderClick(orderSpan) {
    orderSpan.classList.add('despached');

    setTimeout(() => {
      orderSpan.remove(); 
    }, 1000);
}


setInterval(() => {
    addOrder();
}, 5000); 
