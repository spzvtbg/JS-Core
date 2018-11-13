function task (jsonArrays) {
    jsonArrays.reduce((newArrayOfArrays, currentString) => {
        let currentArray = JSON.stringify(JSON.parse(currentString).map(x => +x).sort((a, b) => b - a));
        if (newArrayOfArrays.indexOf(currentArray) < 0) {
            newArrayOfArrays.push(currentArray);
        }
        return newArrayOfArrays;
    }, []).map(x => JSON.parse(x)).sort((a,b) => a.length - b.length)
    .forEach(x => console.log('[' + x.join(', ') + ']'));
}

task ([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);