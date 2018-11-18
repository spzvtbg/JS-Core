function solution (commands) {
    const countries = 'countries';
    const totalMoney = 'totalMoney';
    const name = 'name';
    const landmarks = 'landmarks';
    const travelerRegex = /(?<=\s|^)([a-zA-Z ]+)(?=\s)\s*gets\s*(?<=\s)(\d+)(?=\s|$)/;
    const destinationRegex = /(?<=\s|^)([a-zA-Z ]+)(?=\s)\s*visited\s*the\s*(?<=\s)([a-zA-Z ]+)(?=\s)\s*in\s*(?<=\s)([a-zA-Z ]+)(?=\s)\s*-\s*(?<=\s)(\d+)(?=\s|$)/;
    
    const addTraveler = (movements, name, money) => {
        if (!movements[name]) {
            movements[name] = { totalMoney: 0, countries: {} };
        }
        movements[name][totalMoney] += money;
        return movements;
    };
    
    const addDestination = (movements, name, landmark, country, costs) => {
        if (!movements[name]) {
            movements = addTraveler(movements, name, 0);
        }

        let hasEnougthMoney = movements[name][totalMoney] < costs;
        let hasVisitedThisCountry = movements[name][countries][country];
        let hasVisitedThisLandmark = hasVisitedThisCountry ? movements[name][countries][country].indexOf(landmark) < 0 : true;

        if (hasEnougthMoney && (!hasVisitedThisCountry || hasVisitedThisLandmark)) {
            console.log(`Not enough money to visit ${landmark}`);
            return movements;
        }

        if (!movements[name][countries][country]) {
            movements[name][countries][country] = [];
        }

        if (movements[name][countries][country].indexOf(landmark) < 0) {
            movements[name][countries][country].push(landmark);
            movements[name].totalMoney -= costs;
        }
        return movements;
    };

    let movements = commands.reduce((movements, line) => {
        if (line.indexOf('gets') >= 0) {
            let [all, name, money] = travelerRegex.exec(line);
            movements = addTraveler(movements, name.trim(), +(money.trim()));
        } else if (line.indexOf('visited') >= 0) {
            let [all, name, landmark, county, costs] = destinationRegex.exec(line);
            movements = addDestination(movements, name, landmark, county, +costs);
        }
        return movements;
    }, {});

    let movementsLog = Object
        .keys(movements)
        .map((traveler) => {
            return {
                name: traveler,
                countries: Object
                    .keys(movements[traveler][countries])
                    .map((country) => {
                        return {
                            name: country,
                            landmarks: movements[traveler][countries][country],
                        };
                    }),
                totalMoney: movements[traveler][totalMoney]
            };
        });

    movementsLog
        .sort((a, b) => b[countries].length - a[countries].length)
        .forEach(user => {

            console.log(`${user[name]} visited ${user[countries].length} countries and has ${user[totalMoney]} money left`);

            user[countries]
                .sort((a, b) => b[landmarks].length - a[landmarks].length)
                .forEach(country => {

                    console.log(`- ${country[name]} -> ${country[landmarks].length} ${landmarks}`);

                    country[landmarks]
                        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                        .forEach(landmark => console.log(`-- ${landmark}`));
                });
        });
}

solution ([
    'Peter visited the   StatueOfLiberty in USA - 50', 
    'Bill gets 250', 
    'Tim visited the   ChristTheRedeemer in Brazil - 150', 
    'Bill gets 400', 
    'Bill visited the   MountFuji in Japan - 600', 
    'Bill visited the TeatroAmazonas in Brazil - 50',
    'Bill gets 150', 
    'Bill visited the ChristTheRedeemer in Brazil - 150', 
    'Tim gets 500', 
    'Bill visited the StatueOfLiberty in USA - 440', 
    'Tim visited the StatueOfLiberty in USA - 440',
    'Maria gets 650', 
    'Maria visited the StatueOfLiberty in USA - 440', 
    'Maria visited the CapeCod in USA - 100'
]);