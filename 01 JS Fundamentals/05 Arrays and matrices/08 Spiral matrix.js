function print (rowsCount, colsCount) {
    let emptyMatrix = (rows, cols) => {
        let emptyRow = Array.from('0'.repeat(cols)).map(el => 0);
        return Array.from('0'.repeat(rows)).map(row => emptyRow);
    };
    
    let matrix = emptyMatrix(rowsCount, colsCount);

    let directions = {
        0: (currentElement, rowIndex) => {
            if (matrix[rowIndex]) {
                matrix[rowIndex] = matrix[rowIndex]
                .map((element, index) => {
                    return element === 0 ? currentElement++ : element;
                });
            }

            return currentElement;
        },
        1: (currentElement, colIndex) => {
            matrix = matrix
                .map((row) => {
                    let currentRow = row.slice();
                    let currentCol = currentRow[colIndex];
                    if (currentCol === 0) {
                        currentRow[colIndex] = currentElement++;
                    }

                    return currentRow;
                });

            return currentElement;
        },
        2: (currentElement, rowIndex) => {
            if (matrix[rowIndex]) {
                matrix[rowIndex] = matrix[rowIndex]
                .reverse()
                .map((element) => {
                    return element === 0 ? currentElement++ : element;
                }).reverse();
            }
            
            return currentElement;
        },
        3: (currentElement, colIndex) => {
            matrix.reverse();
            matrix = matrix
                .map((row) => {
                    let currentRow = row.slice();
                    let currentColElement = currentRow[colIndex];
                    if (currentColElement === 0) {
                        currentRow[colIndex] = currentElement++;
                    }

                    return currentRow;
                });

            matrix.reverse();
            return currentElement;
        },
    }

    let rowStartIndex = 0, rowEndIndex = rowsCount - 1;
    let colStartIndex = 0, colEndIndex = colsCount - 1;
    let currentDirection = 0, allDirections = 4;
    let currentElement = 1, commonLength = rowsCount + colsCount;

    for (let count = 0; count < commonLength - 1; count++) {
        if (currentDirection === 0) {
            currentElement = directions[currentDirection](currentElement, rowStartIndex++);
        } else if (currentDirection === 1) {
            currentElement = directions[currentDirection](currentElement, colEndIndex--);
        } else if (currentDirection === 2) {
            currentElement = directions[currentDirection](currentElement, rowEndIndex--);
        } else {
            currentElement = directions[currentDirection](currentElement, colStartIndex++);
        }

        currentDirection = (currentDirection + 1) % allDirections;
    }

    matrix
    .map(row => row.join(' '))
    .forEach(row => console.log(row));
}

print(9, 9);