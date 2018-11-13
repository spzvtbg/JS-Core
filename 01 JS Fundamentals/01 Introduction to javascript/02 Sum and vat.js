function sumVat(numbers){
    let sum = 0;

    numbers.forEach(number => {
        sum += +number
    });

    let vat = sum * 0.2;
    let total = sum * 1.2;

    console.log(sum);
    console.log(vat);
    console.log(total);
}

sumVat([1.20, 2.60, 3.50]);