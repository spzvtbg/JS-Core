function getDrink(orderArguments) {
    const splitToArray = (string) => {
        return [].concat(string.split(/,/g).filter(x => x != '').map(x => x.trim()));
    }

    const prices = {
        caf: 0.80,
        dec: 0.9,
        tea: 0.8,
        addMilk: (price) => {
            return +(price * 1.1).toFixed(1);
        },
        suger: (quantity) => {
            return quantity > 0 ? 0.1 : 0;
        } 
    };

    const getOrder = (parameters) => {
        return {
            coins: +parameters[0],
            type: parameters[1],
            base: parameters[1] === 'coffee' ? parameters[2].substr(0, 3) : parameters[1],
            milk: parameters.indexOf('milk') < 0 ? '' : 'milk',
            suger: +parameters[parameters.length - 1],
        };
    };

    const calculatePrice = (order) => {
        let type = order['type'];
        let drink = order['base'];
        let endPrice = prices[drink];

        endPrice = order['milk'] ? prices.addMilk(endPrice) : endPrice;
        endPrice += +prices.suger(order['suger']);

        let changeMoney = order['coins'] - endPrice;
        let message = '';

        if (changeMoney < 0) {
            message = `Not enough money for ${type}. Need ${Math.abs(changeMoney).toFixed(2)}$ more.`;
        } else {
            message = `You ordered ${type}. Price: ${endPrice.toFixed(2)}$ Change: ${changeMoney.toFixed(2)}$`;
        }
         
        return {
            price: endPrice ,
            change: changeMoney,
            toString: message
        }
    }

    const proceed = (order, orders) => {
        let orderArgs = splitToArray(order);
        let currentOrder = getOrder(orderArgs);
        let calculatedOrder = calculatePrice(currentOrder);

        orders.push(calculatedOrder); 
        return orders;
    }

    let orders = orderArguments.reduce((orderCollection, currentOrder) => {
        return proceed(currentOrder, orderCollection);
    }, []);

    let totalOrdersPrice = orders
        .filter(order => order['change'] >= 0)
        .reduce((sum, order) => {
            return sum + order['price'];
        }, 0);

    orders.forEach(order => {
        console.log(order['toString']);
    })

    console.log(`Income Report: ${totalOrdersPrice.toFixed(2)}$`);
}

// getDrink([
//     '1.00, coffee, caffeine, milk, 4', 
//     '0.40, tea, milk, 2',
//     '1.00, coffee, decaf, 0'
// ]);

getDrink([
    '8.00, coffee, decaf, 4',
    '1.00, tea, 2'
]);