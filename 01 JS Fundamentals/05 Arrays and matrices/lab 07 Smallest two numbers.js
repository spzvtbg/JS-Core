function print (elements) {
    const smallestNumbersCount = 2;
    let numbers = Array.from(elements);
    let smallestNumbers = [];

    for (let count = 0; count < smallestNumbersCount; count++) {
        let minNumber = Number.MAX_VALUE;
        let minNumberIndex = 0;

        for (let index = 0; index < numbers.length; index++) {
            const number = +numbers[index];
            if (number < minNumber) {
                minNumber = number;
                minNumberIndex = index;
            }
        }

        if (minNumber != Number.MAX_VALUE) {
            smallestNumbers.push(minNumber);
            numbers.splice(minNumberIndex, 1);
        }
    }

    console.log(smallestNumbers.join(' '));
}

print([]);