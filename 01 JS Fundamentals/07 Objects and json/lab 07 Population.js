function task (towns) {
    let townsObject = towns
    .reduce((obj, string) => {
        let current = string.split(/<->/g).filter(x => x != '').map(x => x.trim());

        if (!obj[current[0]]) {
            obj[current[0]] = 0;
        }
        obj[current[0]] += +current[1];
        return obj;
    }, {});

    for (const key in townsObject) {
        console.log(`${key} : ${townsObject[key]}`);
    }
}

task([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);