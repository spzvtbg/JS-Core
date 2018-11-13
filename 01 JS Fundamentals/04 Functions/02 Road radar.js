function print (driverData) {
    const rules = { residential: 20, city: 50, interstate: 90, motorway: 130 };
    const driver = { location: driverData[1], speed: +driverData[0] };

    let speedDifference = driver.speed - rules[driver.location];

    let message = speedDifference > 40 
        ? 'reckless driving' 
        : speedDifference > 20 
        ? 'excessive speeding' 
        : speedDifference > 0
        ? 'speeding' : '';

    console.log(message);
}

print([200, 'motorway']);