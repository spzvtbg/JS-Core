function task (autoParameters) {
    let collection = {};

    autoParameters.forEach(element => {
        let [make, model, quantity] = element.split(' | ');

        if (!collection[make]) {
            collection[make] = {};
        }
        if (!collection[make][model]) {
            collection[make][model] = 0;
        }
        collection[make][model] += +quantity;
    });

    Object.keys(collection)
    .forEach((make) => {
        console.log(make);
        let models = Object.keys(collection[make])
        .forEach((model) => {
            console.log(`###${model} -> ${collection[make][model]}`);
        })
    });
}

task([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);