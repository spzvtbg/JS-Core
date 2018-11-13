function distance (points) {
    let pointsObj = {
        initial: { x: 0, y: 0 },
        first: { x: +points[0], y: +points[1] },
        second: { x: +points[2], y: +points[3] },
    };

    let pow = (point1x, point2x) => {
        return Math.pow(Math.abs(point1x - point2x), 2);
    };

    let isValidDistance = (firstPoint, secondPoint) => {
        let firstPointPow = pow(firstPoint.x, secondPoint.x);
        let secondPointPow = pow(firstPoint.y, secondPoint.y);
        let distance = Math.sqrt(firstPointPow + secondPointPow);

        return Number.isInteger(distance);
    };

    let pointsToString = (point1, point2) => {
        if (isValidDistance(point1, point2)) {
            console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`);
        } else {
            console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`);
        }
        
    };

    pointsToString(pointsObj.first, pointsObj.initial);
    pointsToString(pointsObj.second, pointsObj.initial);
    pointsToString(pointsObj.first, pointsObj.second);
}

distance([3, 0, 0, 4]);