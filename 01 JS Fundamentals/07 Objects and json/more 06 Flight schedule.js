function solution (flightsInfo) {
    const status = 'status';
    const regex = /([A-Z]+[0-9]+)(?=\s)\s+(?<=\s)(.+)\s*/

    let flights = flightsInfo[0].reduce((flights, current) => {
        let tokens = regex.exec(current);

        if (tokens) {
            flights[tokens[1]] = {
                destination: tokens.slice(2).join(' '),
                status: 'Ready to fly'
            };
        }
        
        return flights;
    }, {});
    
    flightsInfo[1].forEach(state => {
        let tokens = regex.exec(state);

        if (tokens && flights[tokens[1]]) {
            flights[tokens[1]][status] = tokens.slice(2).join(' ');
        }
    });

    const statusFilter = flightsInfo[2][0];

    let x = Object.keys(flights).forEach(current => {
        if (flights[current][status] === statusFilter) {
            console.log(`{ Destination: '${flights[current]['destination']}', Status: '${flights[current][status]}' }`);
        }
    });
}

solution ([
    [
        'WN269',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    [
        'Cancelled'
    ]
]);