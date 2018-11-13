function task (lines) {
    const splitInfoFrom = (string) => {
        let info = string.split('/').map(x => x.trim());
        return {
            name: info[0],
            level: +info[1],
            items: info[2] ? info[2].split(',').map(x => x.trim()) : []
        };
    }

    let heroes = [];

    lines.forEach(line => {
        let currentHero = splitInfoFrom(line);
        heroes.push(currentHero);
    });

    console.log(JSON.stringify(heroes));
}

task([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);