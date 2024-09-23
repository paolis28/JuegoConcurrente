onmessage = function(event) {
    const orders = [
        { id: 1, items: ['Papas Fritas', 'Hamburguesa'] },
        { id: 2, items: ['Refresco', 'Hamburguesa'] },
        { id: 3, items: ['Papas Fritas', 'Refresco'] }
    ];

    let orderCount = 0; 
    const maxOrders = 9; 

    function getRandomOrder() {
        const randomIndex = Math.floor(Math.random() * orders.length);
        return orders[randomIndex];
    }

    const intervalId = setInterval(() => {
        if (orderCount < maxOrders) { 
            const newOrder = getRandomOrder();
            postMessage(newOrder);
            orderCount++; 
        } else {
            clearInterval(intervalId); 
        }
    }, event.data.interval || 5000); 
};
