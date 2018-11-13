function brand (fruitsCollection) {
    let cherryes = 0;
    let peaches = 0;
    let plums = 0;
    let others = 0;

    fruitsCollection.forEach((line) => {
        let args = line.split(' ').filter(x => x != '').map(x => x.trim());
        let fruit = args[0];
        let weight = +args[1];

        if (fruit === 'cherry') {
            cherryes += weight;
        } else if (fruit === 'peach') {
            peaches += weight;
        } else if (fruit === 'plum') {
            plums += weight;
        } else {
            others += weight;
        }
    });

    let cherryKompots = cherryes ? cherryes / 0.009 / 25 : 0;
    console.log(`Cherry kompots: ${Math.floor(cherryKompots)}`);

    let peachKompots = peaches ? peaches / 0.14 / 2.5 : 0;
    console.log(`Peach kompots: ${Math.floor(peachKompots)}`);

    let plumKompots = plums ? plums / 0.02 / 10 : 0;
    console.log(`Plum kompots: ${Math.floor(plumKompots)}`);

    let rakia = others ? others * 0.2 : 0;
    console.log(`Rakiya liters: ${rakia.toFixed(2)}`);
}

brand([   
    'apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65',
    'watermelon 20.54'
]);