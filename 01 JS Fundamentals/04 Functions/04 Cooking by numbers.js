function cooking (args) {
    let initialNumber = +args[0];

    let operations = {
        chop: (number) => { return number / 2; },
        dice: (number) => { return Math.sqrt(number); },
        spice: (number) => { return number + 1; },
        bake: (number) => { return number * 3; },
        fillet: (number) => { return number * 0.8; }
    }

    for (let index = 1; index < args.length; index++) {
        initialNumber = operations[args[index]](initialNumber);
        console.log(initialNumber);
    }
}

//cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);