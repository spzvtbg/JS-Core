function print (array) {
    let result = array
        .map((element) => {
            return element
                .replace(/\s*\|\s*/g, ',')
                .split(',')
                .filter(x => x != '');
        })
        .reduce((endCollection, currentRow) => {
            endCollection[0].push(currentRow[0]);
            endCollection[1][0] += +currentRow[1];
            return endCollection;
        }, [[], [0]])
        .forEach(element => {
            console.log(element.join(', '))
        });
}

print(['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']);