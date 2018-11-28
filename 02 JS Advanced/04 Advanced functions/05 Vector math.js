let solution = (function () {

    function add () {
        let [vector1, vector2] = arguments;
        return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
    }

    function multiply () {
        let [vector1, scalar] = arguments;
        return [vector1[0] * scalar, vector1[1] * scalar];
    }

    function length () {
        let [vector1] = arguments;
        return Math.sqrt(Math.pow(vector1[0], 2) + Math.pow(vector1[1], 2));
    }

    function dot () {
        let [vector1, vector2] = arguments;
        return vector1[0] * vector2[0] + vector1[1] * vector2[1];
    }

    function cross () {
        let [vector1, vector2] = arguments;
        return vector1[0] * vector2[1] - vector1[1] * vector2[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();

console.log(solution.dot([2, 3], [2, -1]));
