function print(array) {
    let x = +array[3];
    let y = +array[2];
    let arrayI = Array.from('0'.repeat(+array[1])).map(x => +x);
    let matrix = Array.from('0'.repeat(+array[0])).map(row => arrayI);

    matrix.map((currentRow, rowIndex) => {
        return currentRow.slice().map((currentElement, colIndex) => {
            let valueX = Math.abs(y - rowIndex) + 1;
            let valueY = Math.abs(x - colIndex) + 1;
            currentElement = Math.max(valueX, valueY);
            return currentElement;
        });
    }).forEach(x => console.log(x.join(' ')));
}

print([11, 11, 5, 5]);