function rounding (parameters) {
    let value = +parameters[0];
    let decimals = +parameters[1]; 

    decimals = decimals > 15 ? 15 : decimals;
    console.log(+value.toFixed(decimals));
}

rounding([10.5, 3]);