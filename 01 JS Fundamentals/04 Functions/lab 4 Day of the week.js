function print (day) {
    const dayOfWeek = (text) => {
        const options = {
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
            'sunday': 7,
            'unknown': 'error'
        };

        let day = options[text.toLowerCase()];

        console.log(day ? day : options.unknown);
    }

    dayOfWeek(day);
}

print('monday');