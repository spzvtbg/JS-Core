let fibonacci = (function solution () {

    let first = 1;
    let second = 0;
    let temp = 0;

    function next () {
        temp = first + second;
        first = second;
        second = temp;
    }

    return function () {
        next();
        return second;
    }
})();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());