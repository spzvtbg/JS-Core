function task (fruits) {
    let index = 1;
    let fruitJuices = fruits.reduce((juices, fruit) => {
        let [name, quantity] = fruit.split(' => ').map(x => x.trim());
        
        if (!juices[name]) {
            juices[name] = {};
        }

        if (!juices[name]['quantity']) {
            juices[name]['quantity'] = 0;
        }
        juices[name]['quantity'] += +quantity;

        if (!juices[name]['order'] && juices[name]['quantity'] >= 1000) {
            juices[name]['order'] = index++;
        }

        return juices;
    }, {});

    Object.keys(fruitJuices)
        .reduce((collection, key) => {
            let current = fruitJuices[key]; 

            if (current['order']) {
                collection.push({ name: key, bottles: parseInt(current.quantity / 1000), order: current.order});
            }

            return collection;
        }, [])
        .sort((a, b) => a.order - b.order)
        .forEach(x => console.log(`${x.name} => ${x.bottles}`));
}

task(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);