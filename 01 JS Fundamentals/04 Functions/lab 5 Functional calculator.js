function result (number1, number2, operator) {
    const options = {
        '+': (a, b) => { return a + b; },
        '-': (a, b) => { return a - b; },
        '*': (a, b) => { return a * b; },
        '/': (a, b) => { return a / b; }
    };

    console.log(options[operator](number1, number2));
}

result(1, 2, '+');