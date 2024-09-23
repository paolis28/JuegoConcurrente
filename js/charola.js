// charola.js

function getFoodItems() {
    const items = []; 
    const foodItems = document.querySelectorAll('#food-items img');
    foodItems.forEach(item => {
        items.push(item.id);
    });
    return items;
}

function updateCharola(newCharola) {
    const charolaDiv = document.getElementById('food-items');
    charolaDiv.innerHTML = '';
    newCharola.forEach(item => {
        const img = document.createElement('img');
        img.src = `./assets/img/${item}.png`;
        img.id = item;
        charolaDiv.appendChild(img);
    });
}
