function getSumFirstLastFromArray (numbers) {
    const first = +numbers[0];
    const length = numbers.length;
    const last = +numbers[length - 1];

    if (!first) {
        first = 0;
    }
    if (!last) {
        last = 0;
    }

    return first + last;
}

console.log(getSumFirstLastFromArray(['20', '30', '40']));