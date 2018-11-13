function task(array) {
    let wordsObject = array[0]
        .split(/\W/)
        .filter(x => x != '')
        .reduce((outputObj, currentWord) => {
            if (Object.keys(outputObj).indexOf(currentWord) < 0) {
                outputObj[currentWord] = 0;
            }

            outputObj[currentWord]++;
            return outputObj;
        }, {});
        
    console.log(JSON.stringify(wordsObject));
}

task(["Far too slow, you're far too slow."]);