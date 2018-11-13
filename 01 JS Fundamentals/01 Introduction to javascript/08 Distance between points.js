function distanceBetween2DPoints (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

console.log("distance: " + distanceBetween2DPoints(1, 2, 3, 4));