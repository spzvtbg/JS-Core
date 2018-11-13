function print (sentences) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let match = regex.exec(sentences);
    let variables = [];

    while (match) {
        variables.push(match[1].trim());
        match = regex.exec(sentences);
    }

    console.log(variables.join());
}

print('_test _003 _out _txt');