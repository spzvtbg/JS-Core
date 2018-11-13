function convert (value) {
    let feet = Math.floor(+value / 12);
    let inch = +value - feet * 12;

    console.log(`${feet}'-${inch}"`);
}

convert(55);