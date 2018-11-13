function print (base) {
    const average = (number, sum) => {
        let numberAsString = number +'';
        for (const digit of numberAsString) {
            sum += +digit;
        }
        return sum / numberAsString.length;
    }

    let sum = 0;

    while (average(base, sum) <= 5) {
        base += '9';
    }

    console.log(base);
}

print(5835);