function task (data) {
    const extractToArray = (dataStringLine) => {
        return dataStringLine.split('|').map(x => x.trim()).filter(x => x != '');
    };
    const initializeLocationObject = (propertiesCollection) => {
        return propertiesCollection.reduce((object, property) => {
            object[property] = null;
            return object;
        }, {});
    };

    let locationsAndParameters = data.map((parametersString) => {
        return extractToArray(parametersString);
    });

    let properties = locationsAndParameters[0];
    let locationsValues = locationsAndParameters.slice(1);

    let locationsCollection = locationsValues.reduce((collection, values) => {
        let currentLocation = initializeLocationObject(properties);

        values.forEach((value, index) => {
            let valueAsNumber = +value;
            currentLocation[properties[index]] = valueAsNumber || valueAsNumber === 0 ? valueAsNumber : value;
        });

        collection.push(currentLocation);
        return collection;
    }, []);

    let locationsInJsonFormat = JSON.stringify(locationsCollection);
    console.log(locationsInJsonFormat);
}

task([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

task([
    '| Town | Latitude | Longitude |',
    '| Sofia | 0.00 | 0.001 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);