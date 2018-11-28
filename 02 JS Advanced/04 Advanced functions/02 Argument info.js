function argumentInfo () {
    let args = arguments;

    let aggregatedArguments = [...args].reduce((statistic, current) => {
        let type = typeof current;

        if (!statistic[type]) {
            statistic[type] = 0;
        } 
        statistic[type]++;

        console.log(`${type}: ${current}`);

        return statistic;
    }, {});

    Object.keys(aggregatedArguments)
        .sort((a, b) => aggregatedArguments[b] - aggregatedArguments[a])
        .forEach(type => console.log(`${type} = ${aggregatedArguments[type]}`));
}

// argumentInfo ('cat', 42, function () { console.log('Hello world!'); });
argumentInfo (42, 'cat', 15, 'kitten', 'tomcat');