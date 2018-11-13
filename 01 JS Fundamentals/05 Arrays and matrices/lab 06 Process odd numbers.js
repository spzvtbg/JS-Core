function print (elements) {
    let oddIndexElements = [];
    for (let index = 0; index < elements.length; index++) {
        if (index % 2 === 1) {
            oddIndexElements.push(+elements[index]);
        }
    }

    console
        .log(oddIndexElements
        .map(element => element *= 2)
        .reverse()
        .join(' '));
}

print([1, 0, 3, 4]);