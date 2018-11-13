function tresure (cordinates) {
    let islands = {
        onTokelau: (x, y) => { return x >= 8 && x <= 9 && y >= 0 && y <= 1; },
        onTuvalu: (x, y) => { return x >= 1 && x <= 3 && y >= 1 && y <= 3; },
        onSamoa: (x, y) => { return x >= 5 && x <= 7 && y >= 3 && y <= 6; },
        onTonga: (x, y) => { return x >= 0 && x <= 2 && y >= 6 && y <= 8; },
        onCook: (x, y) => { return x >= 4 && x <= 9 && y >= 7 && y <= 8; }
    }

    for (let index = 0; index < cordinates.length; index += 2) {
        const x = +cordinates[index];
        const y = +cordinates[index + 1];

        let research = islands.onCook(x, y) ? 'Cook'
                     : islands.onSamoa(x, y) ? 'Samoa'
                     : islands.onTokelau(x, y) ? 'Tokelau'
                     : islands.onTonga(x, y) ? 'Tonga'
                     : islands.onTuvalu(x, y) ? 'Tuvalu'
                     : 'On the bottom of the ocean';

        console.log(research);
    }
}

tresure([6, 4]);