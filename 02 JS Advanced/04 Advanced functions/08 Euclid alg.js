// function calculate (a, b) {
//     let max = Math.max(a, b);
//     let min = Math.min(a, b);

//     while (true) {
//         let temp = max % min;
//         max = min;
//         min = temp; 

//         if (temp === 0) {
//             return max;
//         }
//     }
// }

function euclid (a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let temp = Number.MAX_SAFE_INTEGER;

    function calculate (max, min) {
        temp = max % min;
        max = min;
        min = temp;

        return temp !== 0 ? calculate(max, min) : max;
    }

    return calculate(max, min);
}

console.log(euclid(252, 105));