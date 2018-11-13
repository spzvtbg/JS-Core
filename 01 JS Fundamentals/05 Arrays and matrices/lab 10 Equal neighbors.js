function find (matrix) {
    console.log(matrix.reduce((equalElementsCount, currentArray, currentArrayIndex, basicMatrix) => {
        return equalElementsCount += currentArray.reduce((sumEqualElements, currentElement, elementIndex, currentCollection) => {
            let nextElement = currentCollection[elementIndex + 1];
            if (nextElement && currentElement === nextElement) {
                sumEqualElements++;
            };

            let nextArray = basicMatrix[currentArrayIndex + 1];
            if (nextArray && currentElement === basicMatrix[currentArrayIndex + 1][elementIndex]) {
                sumEqualElements++;
            };

            return sumEqualElements;
        }, 0);
    }, 0));
}

find([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);