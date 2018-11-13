function printBoard (quadrats) {
    const black = 'black';
    const white = 'white';

    console.log('<div class="chessboard">');

    for (let row = 0; row < quadrats; row++) {
        console.log('  <div>');

        let color = row % 2 === 0 ? black : white;

        for (let col = 0; col < quadrats; col++) {
            console.log(`    <span class="${color}"></span>`);
            color = color === black ? white : black;
        }

        console.log('  </div>');
    }

    console.log('</div>');
}

printBoard(3);