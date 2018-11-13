function task(array) {
    let townsArticlesPrices = array
        .map(element => {
            return element.split(/\|/).filter(x => x != '').map(x => x.trim());
        })
        .reduce((articels, current) => {
            let city = current[0];
            let articel = current[1];
            let price= +current[2];

            if (!articels[articel]) {
                articels[articel] = {};
            }

            if (!articels[articel][city]) {
                articels[articel][city] = 0;
            }

            articels[articel][city] = price;

            return articels;
        }, {});

    for (const articel in townsArticlesPrices) {
            let towns = townsArticlesPrices[articel];
            let lowestPrice = Number.MAX_SAFE_INTEGER;
            let inTown = '';

            for (const name in towns) {
                let price = towns[name];

                if (lowestPrice > price) {
                    lowestPrice = price;
                    inTown = name;
                }
            }

            console.log(`${articel} -> ${lowestPrice} (${inTown})`);
    }
}

// task([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);

task([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);
