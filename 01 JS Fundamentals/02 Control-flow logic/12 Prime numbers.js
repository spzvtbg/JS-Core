function isPrime (number) {
    for (let num = 2; num <= Math.sqrt(number); num++) {
        if (number % num === 0) {
            console.log(false);
            return;
        }
    }

    console.log(number > 1 ? true : false);
}

isPrime(4);