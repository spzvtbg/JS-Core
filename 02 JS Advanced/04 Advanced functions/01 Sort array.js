function sortArrayOfNumbers (numbers, sortArgument) {
    const sortingPattern = {
        asc: ascendingOrder,
        desc: descendingOrder
    };

    return sortingPattern[sortArgument](numbers);

    function ascendingOrder (numbers) {
        return numbers.sort((a, b) => a - b);
    }

    function descendingOrder (numbers) {
        return numbers.sort((a, b) => b - a);
    }
}

console.log(sortArrayOfNumbers ([14, 7, 17, 6, 8], 'asc'));