function pointInRectangle (args) {
    let x = args[0];
    let y = args[1];
    let xMin = args[2];
    let xMax = args[3];
    let yMin = args[4];
    let yMax = args[5];

    if (y >= yMin && y <= yMax && x >= xMin && x <= xMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

pointInRectangle([8, -1, 2, 12, -3, 3]);