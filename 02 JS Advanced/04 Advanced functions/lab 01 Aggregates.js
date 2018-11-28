function aggregates (arrayOfNumbers) {
    let resultObject = { 
        Sum: 0, 
        Min: Number.MAX_SAFE_INTEGER, 
        Max: Number.MIN_SAFE_INTEGER, 
        Product: 1, 
        Join: '' 
    };

    arrayOfNumbers.reduce ((object, current) => {
        object.Sum += current;
        object.Min = object.Min >= current ? current : object.Min; 
        object.Max = object.Max <= current ? current : object.Max;
        object.Product *= current;
        object.Join += current.toString();

        return object;
    }, resultObject);

    for (const key in resultObject) {
        console.log(`${key} = ${resultObject[key]}`);
    }
}

aggregates ([2, 3, 10, 5]);