function convert (degrees) {
    const fullGrads = 360;
    
    let grads = degrees * 0.9;

    console.log((fullGrads + grads % fullGrads) % fullGrads);
}

convert(850);