function print (array) {
    let step = array.pop();
    array.forEach((element, index) => {
        if (index % step === 0) {
            console.log(element);
        }
    });
}

print([1, 2, 3, 4, 5, 6, 2]);