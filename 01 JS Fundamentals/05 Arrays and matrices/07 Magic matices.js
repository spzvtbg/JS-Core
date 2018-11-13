function print (matrix) {
    console.log(matrix.reduce((sumArray, array, arrayIndex, readonlyMatrix) => {
        sumArray.push(array.reduce((rowSum, colElement, colIndex) => {
            sumArray.push(readonlyMatrix.reduce((colSum, row) => {
                return colSum + row[colIndex];
            }, 0));
            return rowSum + colElement;
        }, 0));
        return sumArray;
    }, []).reduce((isMagical, curr, index, readonlySumArray) => {
        return !isMagical ? false : readonlySumArray[0] === curr;
    }, true));
}

print([
    [4, 5, 3],
    [6, 5, 4],
    [5, 5, 5]
]);