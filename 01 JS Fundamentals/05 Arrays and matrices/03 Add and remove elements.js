function print (array) {
    let count = 0;
    let result = array.reduce((resultCollection, command) => {
        if (command === 'add') {
            resultCollection.push(++count);
        } else if (command === 'remove') {
            resultCollection.pop();
            count++;
        }
        return resultCollection;
    }, []).filter((element) => {
        console.log(element);
        return element;
    });

    if (result.length === 0) {
        console.log('Empty');
    }
} 

print(['remove']);