function findMaxNumber (arrayOfNumbers) {
    return arrayOfNumbers.reduce((max, current) => {
        return max < current ? current : max;
    }, Number.MIN_SAFE_INTEGER);
}