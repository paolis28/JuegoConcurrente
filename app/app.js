const startFriesBtn = document.getElementById('start-fries');
const startBurgerBtn = document.getElementById('start-burger');
const startDrinkBtn = document.getElementById('start-drink');

const progressFries = document.getElementById('progress-fries');
const progressBurger = document.getElementById('progress-burger');
const progressDrink = document.getElementById('progress-drink');
const message = document.getElementById('message');

let friesWorker, burgerWorker, drinkWorker;

const foodItems = document.getElementById('food-items');


const orderContainer = document.querySelector('.containerMenu');

// Inicializar el worker para órdenes
const orderWorker = new Worker('./workers/order.js');

orderWorker.postMessage({ interval: 5000 }); 
orderWorker.onmessage = function(event) {
  const newOrder = event.data; 
  addOrderToUI(newOrder);       
};


function addOrderToUI(order) {
  const orderSpan = document.createElement('span'); 
  const orderLabel = document.createElement('label'); 
  orderLabel.textContent = `Orden: ${order.items.join(", ")}`;  
  orderSpan.appendChild(orderLabel); 
  orderContainer.appendChild(orderSpan);  
}


function addOrderImage(imageSrc, altText, className) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = altText;
  imgElement.classList.add(className);
  foodItems.appendChild(imgElement);
}

// Preparando papitas
startFriesBtn.addEventListener('click', () => {
if (!friesWorker) {
  friesWorker = new Worker('./workers/fries.js'); 
  friesWorker.postMessage({});
  friesWorker.onmessage = (event) => {
    const { progress, done } = event.data;
    progressFries.value = progress;
    if (done) {
      message.textContent = "Las papas están listas!";
      addOrderImage('./assets/img/papitas.png', 'Papas Fritas', 'fries');
      friesWorker.terminate();
      friesWorker = null;
    }
  };
}
});

// Preparando la hamburguesa
startBurgerBtn.addEventListener('click', () => {
if (!burgerWorker) {
  burgerWorker = new Worker('./workers/burger.js');
  burgerWorker.postMessage({});
  burgerWorker.onmessage = (event) => {
    const { progress, done } = event.data;
    progressBurger.value = progress;
    if (done) {
      message.textContent = "La hamburguesa está lista!";
      addOrderImage('./assets/img/burguer.png', 'Hamburguesa', 'burger');
      burgerWorker.terminate();
      burgerWorker = null;
    }
  };
}
});

// Preparando la Coca
startDrinkBtn.addEventListener('click', () => {
if (!drinkWorker) {
  drinkWorker = new Worker('./workers/drink.js');
  drinkWorker.postMessage({});
  drinkWorker.onmessage = (event) => {
    const { progress, done } = event.data;
    progressDrink.value = progress;
    if (done) {
      message.textContent = "El refresco está listo!";
      addOrderImage('./assets/img/coke.png', 'Refresco', 'drink');
      drinkWorker.terminate();
      drinkWorker = null;
    }
  };
}
});







