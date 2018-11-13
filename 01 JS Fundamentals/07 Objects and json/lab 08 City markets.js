function task(array) {
    let citiesMarkets = array
        .map(element => {
            return element.split(/->|:/).filter(x => x != '').map(x => x.trim());
        })
        .reduce((cities, current) => {
            let city = current[0];
            let articel = current[1];
            let quantity = +current[2];
            let price = +current[3];

            if (!cities[city]) {
                cities[city] = {};
            }

            if (!cities[city][articel]) {
                cities[city][articel] = 0;
            }

            cities[city][articel] += quantity * price;
            return cities;
        }, {});

    for (const city in citiesMarkets) {
        console.log(`Town - ${city}`);

        for (const articel in citiesMarkets[city]) {
            console.log(`$$$${articel} : ${citiesMarkets[city][articel]}`);
        }
    }
}

task([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);