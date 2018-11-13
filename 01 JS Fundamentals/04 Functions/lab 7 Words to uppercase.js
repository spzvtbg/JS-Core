function print (parameter) {
    const text = parameter + '';
    const pattern = /[\w]+/;
    const regex = new RegExp(pattern, "g");

    let words = [];

    while (true) {
        let result = regex.exec(text);
        let match = '';

        if (result) {
            match = result[0];
            words.push(match.toUpperCase());
        }
        else {
            break;
        }

        regex.lastIndex += 1;
    }

    console.log(words.join(', '));
}

print('Hi, how are you?');