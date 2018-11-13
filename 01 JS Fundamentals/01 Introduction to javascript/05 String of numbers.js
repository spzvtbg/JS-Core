function strinngOfNumbersTo (endNumber) {
    let stringOfNumbers = '';

    for (let index = 1; index <= +endNumber; index++) {
        stringOfNumbers += index;
    }

    console.log(stringOfNumbers);
}