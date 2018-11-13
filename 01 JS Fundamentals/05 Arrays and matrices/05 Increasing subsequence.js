function print (array) {
    let first = array[0];
    if (first || first === 0) {
        let result = [];
        result.push(first);
        array.reduce((previous, current) => {
            if (previous <= current) {
                result.push(current);
                previous = current;
            }
            return previous;
        });
        result.forEach(x => console.log(x));
    }
}

print([0, 10, 12, 0]);