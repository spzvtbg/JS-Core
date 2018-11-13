function task (array) {
    console
        .log(Object
        .keys(array
            .reduce((dictionaryFilter, key) => {
                if (!dictionaryFilter[key]) {
                    dictionaryFilter[key] = 0;
                }
                dictionaryFilter[key]++;
                return dictionaryFilter;
            }, {}))
        .sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))
        .join('\n'));
}

task (['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston']);