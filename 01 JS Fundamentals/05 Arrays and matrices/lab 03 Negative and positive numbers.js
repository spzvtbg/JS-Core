function print (elements) {
    if (!elements) {
        return '';
    }

    let elementsCollection = [];

    for (let index = 0; index < elements.length; index++) {
        const element = +elements[index];

        if (!element && element != 0) {
            continue;
        }
        
        if (element < 0) {
            elementsCollection.unshift(element);
        } else {
            elementsCollection.push(element);
        }
    }

    console.log(elementsCollection.join('\n')); 
}

print(['-20', '0', '-40']);