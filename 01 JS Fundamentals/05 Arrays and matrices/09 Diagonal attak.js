function print (arrayOfStrings) {
    let matrix = arrayOfStrings.map((string) => {
        return string.split(' ').map(n => +n);
    });

    let startIndex = 0, endIndexOperand = 1;

    let equalDiagonalsSums = []
        .concat(matrix)
        .reduce((previous, row) => {
            previous[0] += row[startIndex++];
            previous[1] += row[row.length - endIndexOperand++];

            return previous;
        }, [0, 0]);

    if (equalDiagonalsSums[0] === equalDiagonalsSums[1]) {
        startIndex = -1, endIndexOperand = 0;
        matrix = matrix.map(row => {
            startIndex++;
            endIndexOperand++;
            
            return row.map((element, index, array) => {
                if (index != startIndex && index != array.length - endIndexOperand) {
                    element = equalDiagonalsSums[0];
                }

                return element;
            });
        });
    } 

    matrix.forEach(row => console.log(row.join(' ')));
}

print(
['5 3 12 3 1',
 '11 4 23 2 5',
 '101 12 3 21 10',
 '1 4 5 2 2',
 '5 22 33 11 1']);