function solution (rectangles) {
    let newRectangle = (function () {
        let rectangle = Object.create(null);
        rectangle.width = 0;
        rectangle.height = 0;
        rectangle.area = undefined;
        rectangle.compare = undefined;

        return function ([width, height]) {
            let current = Object.create(rectangle);

            current.width = width;
            current.height = height;
            current.area = function () {
                return this.width * this.height;
            };
            current.compareTo = function (rectangle) {
                return this.area() < rectangle.area() 
                    ? 1 
                    : this.area() > rectangle.area() 
                    ? -1 
                    : this.width < rectangle.width
                    ? 1 
                    : this.width > rectangle.width
                    ? -1
                    : 0;
            };

            return current;
        }
    })();

    return rectangles.map(x => newRectangle(x)).sort((a, b) => a.compareTo(b));
}

console.log(solution ([[1,20],[20,1],[5,3],[5,3]]));
