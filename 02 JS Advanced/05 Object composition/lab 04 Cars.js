function solution (args) {
    let cars = (function () {
        let carsObjects = {};

        return {
            create: (name, inherit, fromObj) => {

                let car;

                if (inherit) {
                    car = Object.create(carsObjects[fromObj]);
                } else {
                    car = Object.create(null);
                }

                carsObjects[name] = car;
            },
            set: (name, property, value) => {
                carsObjects[name][property] = value;
            },
            print: (name) => {
                let values = [];
                for (const key in carsObjects[name]) {
                    values.push(`${key}:${carsObjects[name][key]}`);
                }
                console.log(values.join(', '));
            }
        };
    })();

    args.forEach(element => {
        let [command, name, from, other] = element.split(' ');
        cars[command](name, from, other);
    });
}

solution([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])