let manager = (function () {
    let stock = microelements();

    function microelements (pro, car, fat, fla) {
        return {
            protein: pro ? pro : 0, 
            carbohydrate: car ? car : 0, 
            fat: fat ? fat : 0,
            flavour: fla ? fla : 0
        };
    };

    function products (recipe) {
        let products = {
            apple: microelements(0, 1, 0, 2),
            coke: microelements(0, 10, 0, 20),
            burger: microelements(0, 5, 7, 3),
            omelet: microelements(5, 0, 1, 1),
            cheverme: microelements(10, 10, 10, 10),
        };

        return products[recipe.toLowerCase()];
    }

    let commandPattern = {
        restock: function (microelement, quantity) {
            stock[microelement] += quantity;
            return 'Success';
        },
        prepare: function (recipe, quantity) {
            let ingredients = products(recipe);
            return coocking(ingredients, +quantity);
        },
        report: function () {
            return Object.keys(stock).map(key => `${key}=${stock[key]}`).join(' ');
        }
    };

    function coocking (ingredients, quantity) {
        let message = 'Success';

        Object.keys(ingredients).forEach(key => {
            ingredients[key] *= quantity;
        });

        if (stock.protein < ingredients.protein) {
            message = `Error: not enough protein in stock`;
        } else if (stock.carbohydrate < ingredients.carbohydrate) {
            message = `Error: not enough carbohydrate in stock`;
        } else if (stock.fat < ingredients.fat) {
            message = `Error: not enough fat in stock`;
        } else if (stock.flavour < ingredients.flavour) {
            message = `Error: not enough flavour in stock`;
        } else {
            Object.keys(stock).forEach(key => {
                stock[key] -= ingredients[key];
            });
        }

        return message;
    }

    return function prepair (args) {
        let [command, argument, quantity] = args.split(' ');
        return commandPattern[command](argument, +quantity);
    };
})();


console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));