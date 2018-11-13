function task (townsInfo) {
    console.log(JSON.stringify(townsInfo.reduce((obj, current, index, array) => {
        if (index % 2 === 0) {
            if (obj[current]) {
                obj[current] += +array[index + 1];
            } else {
                obj[current] = +array[index + 1];
            }
        }

        return obj;
    }, {})));
}
   
task(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);