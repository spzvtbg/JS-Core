let result = (function () {
    sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function () {
        return sum
    }

    return add;
})();

console.log(result(10)(20)(5));