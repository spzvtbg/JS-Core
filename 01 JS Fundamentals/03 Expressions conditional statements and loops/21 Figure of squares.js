function print (n) {
    let height = n % 2 === 0 ? n - 1 : n;
    let length = n * 2 - 1;

    for (let row = 0; row < height; row++) {
        let isPlusRow = row === 0 || row === Math.round(height / 2 - 1) || row === height - 1; 
        let rowContent = '';

        for (let col = 0; col < length; col++) {
            let isPlusCol = col === 0 || col === Math.round(length / 2 - 1) || col === length - 1;
            
            if (isPlusRow && isPlusCol) {
                rowContent += '+'
            } else if (isPlusRow) {
                rowContent += '-'
            } else if (isPlusCol) {
                rowContent += '|'
            } else {
                rowContent += ' '
            }
        }

        console.log(rowContent);
    }
}

print(4);