function proceed(args) {
    const brand = 'brand';
    const name = 'name';
    const expire = 'expire';
    const quantity = 'quantity';
    const splitToObject = (string) => {
        let arrayOfArguments = string.split(',').filter(x => x != '').map(x => x.trim());
        return {
            command: arrayOfArguments[0].toLowerCase(),
            brand: arrayOfArguments[1],
            name: arrayOfArguments[2],
            expire: arrayOfArguments[3],
            quantity: +arrayOfArguments[4]
        };
    };
    const coffeeKind = (coffeeArguments) => {
        return {

        };
    };
    const commandPattern = {
        report: (collection) => {
            console.log(`>>>>> REPORT! <<<<<`);

            for (const brand in collection) {
                console.log(`Brand: ${brand}:`);

                let brands = collection[brand];
                let kinds = Object.keys(brands);
                kinds.forEach(kind => {
                    let expireDate = brands[kind][expire];
                    let kindQuantity = brands[kind][quantity];

                    console.log(`-> ${kind} -> ${expireDate} -> ${kindQuantity}.`);
                });
            }

            return collection;
        },
        inspection: (collection) => {
            console.log(`>>>>> INSPECTION! <<<<<`);

            let sortedKeys = Object.keys(collection).sort((a, b) => a > b);

            for (const brand of sortedKeys) {
                console.log(`Brand: ${brand}:`);

                let brandContent = collection[brand];
                let sortedKinds = Object
                    .keys(brandContent)
                    .reduce((array, nameKey) => {
                        array.push({
                            name: nameKey,
                            expire: brandContent[nameKey][expire],
                            quantity: brandContent[nameKey][quantity]
                        });

                        return array;
                    }, [])
                    .sort((a, b) => {
                        return a[quantity] - b[quantity] < 0;
                    });

                sortedKinds.forEach(kind => {
                    console.log(`-> ${kind[name]} -> ${kind[expire]} -> ${kind[quantity]}.`);
                });
            }

            return collection;
        },
        in: (collection, parameters) => {
            let brandKey = parameters[brand];

            if (!collection[brandKey]) {
                collection[brandKey] = {};
            }

            let kindKey = parameters[name];
            let expireDate = parameters[expire];

            if(!collection[brandKey][kindKey] || collection[brandKey][kindKey][expire] < expireDate) {
                collection[brandKey][kindKey] = {
                    expire: expireDate,
                    quantity: parameters[quantity]
                };
            } else if (collection[brandKey][kindKey][expire] === expireDate) {
                collection[brandKey][kindKey][quantity] += +parameters[quantity];
            }

            return collection;
        },
        out: (collection, parameters) => {
            let brandKey = parameters[brand];
            let kindKey = parameters[name];
            let expireDate = parameters[expire];
            let quantityOut = parameters[quantity];

            if (collection[brandKey]) {
                if (collection[brandKey][kindKey]) {
                    if (collection[brandKey][kindKey][expire] > expireDate) {
                        if (collection[brandKey][kindKey][quantity] >= quantityOut) {
                            collection[brandKey][kindKey][quantity] -= quantityOut;
                        }
                    }
                }
            }

            return collection;
        },
    };

    let brandCollection = {
        // brand: {
        //     kind: {
        //         expire: '',
        //         quantity: 0
        //     }
        // }
    };

    args.forEach(line => {
        let parameters = splitToObject(line);
        brandCollection = commandPattern[parameters['command']](brandCollection, parameters);
    });
}

proceed([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);