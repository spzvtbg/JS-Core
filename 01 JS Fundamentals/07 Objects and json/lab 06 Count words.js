function task(array) {
    let wordsObject = array[0]
        .split(/\W/)
        .filter(x => x != '')
        .map(x => x.toLowerCase())
        .reduce((outputObj, currentWord) => {
            if (Object.keys(outputObj).indexOf(currentWord) < 0) {
                outputObj[currentWord] = 0;
            }

            outputObj[currentWord]++;
            return outputObj;
        }, {});

    Object.keys(wordsObject).sort().forEach(x => console.log(`'${x}' -> ${wordsObject[x]} times`));
}

task(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);