function result (elements) {
    let evenPositionElements = [];

    for (let index = 0; index < elements.length; index++) {
        if (index % 2 === 0) {
            evenPositionElements.push(elements[index]);
        }
    }

    return evenPositionElements.join(' ');
}

console.log(result(['20', '30', '40']));