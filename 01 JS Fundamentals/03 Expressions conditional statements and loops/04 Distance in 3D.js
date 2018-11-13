function distance3D (parameters) {
    let x = Math.pow(parameters[0] - parameters[3], 2);
    let y = Math.pow(parameters[1] - parameters[4], 2);
    let z = Math.pow(parameters[2] - parameters[5], 2);
    let distance = Math.sqrt(x + y + z);

    console.log(distance);
}

distance3D([3.5, 0, 1, 0, 2, -1]);