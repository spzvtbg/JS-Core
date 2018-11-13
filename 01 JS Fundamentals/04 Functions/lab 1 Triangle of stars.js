function print (n) {
    let variables = {
        begin: n - 1,
        length: n * -1,
        count: (current) => {
            return n - Math.abs(current);
        },
        stars: (count) => {
            console.log('*'.repeat(count));
        },
    };

    for (let row = variables.begin; row > variables.length; row--) {
        variables.stars(variables.count(row));
    }
}

print(3);