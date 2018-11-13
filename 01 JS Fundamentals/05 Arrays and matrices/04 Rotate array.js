function print (array) {
    if (array && array.length > 0) {
        let rotations = array.pop() % array.length;

        for (let index = 0; index < rotations; index++) {
            let currentElement = array.pop();
            array.unshift(currentElement);
        }

        console.log(array.join(' '));
    }
}

print();