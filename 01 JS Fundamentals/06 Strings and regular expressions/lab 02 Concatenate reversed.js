function print (array) {
    console.log(array
        .reduce((string, currentElement) => string + currentElement)
        .split('')
        .reverse()
        .join(''));
}

print(['I', 'am', 'student']);