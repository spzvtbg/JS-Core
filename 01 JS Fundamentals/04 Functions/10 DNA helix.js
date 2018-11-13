function dnaGenerator (length) {
    const cells = ['AT', 'CG', 'TT', 'AG', 'GG'];

    let cellIndex = 0;
    let starsCount = 2;
    let dashCount = 0;
    let cellsLength = cells.length;
    let starsOperand = 1;
    let dashesOperand = -2;

    for (let node = 0; node < length; node++) {
        let cell = cells[cellIndex];
        let stars = "*".repeat(Math.abs(starsCount));
        let dashes = "-".repeat(Math.abs(dashCount));
        console.log(`${stars}${cell[0]}${dashes}${cell[1]}${stars}`);

        if (Math.abs(starsCount) === 2) {
            starsOperand *= -1
        } 
        if (Math.abs(dashCount) === 4) {
            dashesOperand *= -1
       } 

       starsCount += starsOperand;
       dashCount += dashesOperand;
       cellIndex = (cellIndex + 1) % cellsLength;
    }
}

dnaGenerator(10);