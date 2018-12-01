function solution (commands) {
    let collection = (function () {
        let values = [];
        return {
            add: (value) => {
                values.push(value);
            },
            remove: (value) => {
                values = values.filter(x => x !== value);
            },
            print: () => console.log(values.join())
        }
    })();

    commands.forEach(element => {
        let [command, value] = element.split(' ');
        collection[command](value);
    });
}

solution (['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);