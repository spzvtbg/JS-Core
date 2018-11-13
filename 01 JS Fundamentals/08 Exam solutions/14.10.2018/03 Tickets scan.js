function scan (text, argument) {
    const passengerRegex = /(?<= )([A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*(\.-[A-Z][a-zA-Z]*)*)(?= )/g;
    const airportRegex = /(?<= )([A-Z]{3}\/[A-Z]{3})(?= )/g;
    const flightNumberRegex = /(?<= )([A-Z]{1,3}\d{1,5})(?= )/g;
    const companyRegex = /(?<=(- ))([A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*)(?= )/g;
    const commandPattern = {
        name: (string) => {
            let name = passengerRegex.exec(string)[1].replace(/-/g, ' ').trim();
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
        },
        flight: (string) => {
            let flightNumber = flightNumberRegex.exec(string)[1].trim();
            let airport = airportRegex.exec(string)[1].trim().split('/');

            console.log(`Your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}.`);
        },
        company: (string) => {
            let company = companyRegex.exec(string)[0].replace('*', ' ').trim();
            console.log(`Have a nice flight with ${company}.`);
        },
        all: (string) => {
            let name = passengerRegex.exec(string)[0].replace(/-/g, ' ').trim();
            let flightNumber = flightNumberRegex.exec(string)[0].trim();
            let airport = airportRegex.exec(string)[0].trim().split('/');
            let company = companyRegex.exec(string)[0].replace('*', ' ').trim();
            console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`);
        } 
    };

    commandPattern[argument](text);
}

scan('Tanya-Staneva travels from  BIL/GAS  - N*N  Z97Y45   NZH7708  from STD23:30 arriving at STA02:45', 'company');