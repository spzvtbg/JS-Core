function print (matrix) {
    const lastIndex = matrix.length - 1;

    let initialSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < matrix.length; row++) {
        const array = matrix[row];
        initialSum += array[row];
        secondarySum += array[lastIndex - row];
    }
    console.log(`${initialSum} ${secondarySum}`)
}

print([[20, 40], [10, 60]]);