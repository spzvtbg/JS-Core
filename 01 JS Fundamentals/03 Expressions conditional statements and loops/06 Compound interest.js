function compoundInterest (parameters) {
    let p = +parameters[0]; 
    let i = +parameters[1] / 100;
    let n = 12 / +parameters[2];
    let t = +parameters[3];
    let f = p * (Math.pow((1 + i / n), n * t));
    console.log(f.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);