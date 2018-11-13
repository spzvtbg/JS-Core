function result (matrix) {
    const minNumber = Number.MIN_SAFE_INTEGER;
    let biggestNumber = minNumber;

    for (const array of matrix) {
        for (const element of array) {
            if (element > biggestNumber) {
                biggestNumber = element;
            }
        }
    }

    if (biggestNumber != minNumber) {
        return biggestNumber;
    }
}

console.log(result([[20, 50, 10], [8, 33, 145]]));