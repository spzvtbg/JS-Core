function letterOcurrences(value, key){
    let count = 0;

    for (const letter of value) {
        if (letter === key) {
            count++;
        }
    }

    return count;
}

console.log(letterOcurrences('hello', 'l'));