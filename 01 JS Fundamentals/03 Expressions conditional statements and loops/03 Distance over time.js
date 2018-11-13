function calculate (parameters) {
    let firstDriverSpeed = +parameters[0];
    let secondDriverSpeed = +parameters[1];
    let timeInSeconds = +parameters[2];

    const secondsInHour = 60 * 60;
    const metersInKilometer = 1000;

    let timeInHoursTraveled = timeInSeconds / secondsInHour;
    let firstDriverDistanseInMeters = timeInHoursTraveled * firstDriverSpeed * metersInKilometer;
    let secondDriverDistanseInMeters = timeInHoursTraveled * secondDriverSpeed * metersInKilometer;
    let distanceDiference = Math.abs(firstDriverDistanseInMeters - secondDriverDistanseInMeters);

    console.log(distanceDiference);
}

calculate([5, -5, 40]);