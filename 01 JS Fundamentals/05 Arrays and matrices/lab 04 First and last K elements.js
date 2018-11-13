function print (elements) {
    if (!elements) {
        return;
    }

    const kCount = elements[0];
    if (!kCount) {
        return;
    }

    elements = elements.slice(1);

    const length = elements.length - 1;

    let firstElementsCollection = [];
    let lastElementsCollection = [];

    for (let index = 0; index < kCount; index++) {
        const beginElement = +elements[index];
        const endElement = +elements[length - index];
        if (!beginElement && beginElement != 0 || !endElement && endElement != 0) {
            break;
        }
        
        firstElementsCollection.push(beginElement);
        lastElementsCollection.push(endElement);
    }

    console.log(firstElementsCollection.join(' ')); 
    console.log(lastElementsCollection.reverse().join(' ')); 
}

print(['2', '7', '8', '9']);