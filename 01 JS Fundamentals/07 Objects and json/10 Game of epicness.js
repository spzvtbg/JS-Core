function kingdomsBattle (kingdomsArguments, battleArguments) {

    if (!kingdomsArguments.length) {
        return;
    }

    const generals = 'generals';

    let kingdoms = kingdomsArguments
        .reduce((kingdomsStorage, current) => {
            if (!kingdomsStorage[current.kingdom]) {
                kingdomsStorage[current.kingdom] = { generals: {}, wins: 0, loses: 0, };
            }
            if (!kingdomsStorage[current.kingdom][generals][current.general]) {
                kingdomsStorage[current.kingdom][generals][current.general] = { army: 0, wins: 0, loses: 0};
            }
            kingdomsStorage[current.kingdom][generals][current.general]['army'] += +current.army;
            return kingdomsStorage;
        }, {});
    
    battleArguments.forEach(line => {
        let [attakingKingdom, attakingGeneral, attakedKingdom, attakedGeneral] = line;
        if (attakingKingdom != attakedKingdom) {

            let attaking = kingdoms[attakingKingdom]['generals'][attakingGeneral]['army'];
            let attaked = kingdoms[attakedKingdom]['generals'][attakedGeneral]['army'];

            if (attaking > attaked) {

                kingdoms[attakingKingdom]['generals'][attakingGeneral]['army'] = Math.floor(attaking * 1.1);
                kingdoms[attakedKingdom]['generals'][attakedGeneral]['army'] = Math.floor(attaked * 0.9);
                kingdoms[attakingKingdom]['generals'][attakingGeneral]['wins']++;
                kingdoms[attakedKingdom]['generals'][attakedGeneral]['loses']++;
                kingdoms[attakingKingdom]['wins']++;
                kingdoms[attakedKingdom]['loses']++;

            } else if (attaking < attaked) {

                kingdoms[attakingKingdom]['generals'][attakingGeneral]['army'] = Math.floor(attaking * 0.9);
                kingdoms[attakedKingdom]['generals'][attakedGeneral]['army'] = Math.floor(attaked * 1.1);
                kingdoms[attakingKingdom]['generals'][attakingGeneral]['loses']++;
                kingdoms[attakedKingdom]['generals'][attakedGeneral]['wins']++;
                kingdoms[attakingKingdom]['loses']++;
                kingdoms[attakedKingdom]['wins']++;
            }
        }
    });

    let winner = Object.entries(kingdoms).map((x) => {
        let wins = Object.entries(x[1]);
        let generals = Object.entries(wins[0][1]);
        return {
            kingdom: x[0],
            wins: wins[1][1],
            loses: wins[2][1],
            generals: generals.map(g => {
                return {
                    name: g[0],
                    army: g[1]['army'],
                    wins: g[1]['wins'],
                    loses: g[1]['loses'],
                };
            }).sort((a, b) => b['army'] - a['army'])
        }
    }).sort((a, b) => b['wins'] - a['wins'] || a['loses'] - b['loses'] || a['kingdom'].localeCompare(b['kingdom']))[0];

    console.log(`Winner: ${winner['kingdom']}`);
    winner['generals'].forEach(g => {
        console.log(`/\\general: ${g['name']}`);
        console.log(`---army: ${g['army']}`);
        console.log(`---wins: ${g['wins']}`);
        console.log(`---losses: ${g['loses']}`);
    });
}

kingdomsBattle ([ 
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 } 
],
[ 
    ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"] 
]);