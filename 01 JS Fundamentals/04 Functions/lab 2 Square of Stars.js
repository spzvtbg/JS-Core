function print (n) {
    let variables = {
        length: n ? n : 5,
        stars: () => {
            console.log('* '.repeat(variables.length));
        },
    };

    for (let row = 0; row < variables.length; row++) {
        variables.stars();
    }
}

print();