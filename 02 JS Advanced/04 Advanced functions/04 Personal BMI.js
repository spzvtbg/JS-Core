function status (name, age, weight, height) {

    let bmi = Math.round((weight / Math.pow(height / 100, 2)), 2);

    let statusText = (function () {
        return bmi < 18.5 
            ? 'underweight'
            : bmi < 25 
            ? 'normal'
            : bmi < 30
            ? 'overweight'
            : 'obese';
    })();

    let currentBMI = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: bmi,
        status: statusText
    }

    if (statusText === 'obese') {
        currentBMI.recommendation = 'admission required';
    }

    return currentBMI;
}

console.log(status('wavs', 29, 75, 100));