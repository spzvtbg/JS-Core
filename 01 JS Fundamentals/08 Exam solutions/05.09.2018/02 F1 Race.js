function proceed (pilotsAndArguments) {
    let pilots = pilotsAndArguments[0].split(/\s/g).filter(x => x != '');
    pilotsAndArguments
        .slice(1)
        .forEach(argument => {
            let parts = argument.split(/\s/g).filter(x => x != '');
            let command = parts[0].toLowerCase();
            let pilot = parts[1];

            if (command === 'join') {
                pilots.push(pilot);
            } else if (command === 'crash') {
                let index = pilots.indexOf(pilot);

                if (index >= 0) {
                    pilots.splice(index, 1);
                }
            } else if (command === 'pit') {
                let index = pilots.indexOf(pilot);

                if (index > 0) {
                    let result = pilots.splice(index, 1);
                    pilots.splice(index + 1, 0, result[0]);
                }
            } else if (command === 'overtake') {
                let index = pilots.indexOf(pilot);

                if (index > 0) {
                    let result = pilots.splice(index, 1);
                    pilots.splice(index - 1, 0, result[0]);
                }
            }
        });
    
    console.log(pilots.join(' ~ '));
}

proceed([
    "Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"
]);