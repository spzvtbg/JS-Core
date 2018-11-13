function print (array) {
    array.sort((first, second) => {
        let firstInsensitive = `${first}`.toLowerCase();
        let secondInsensitive = `${second}`.toLowerCase();
        let lengthDifference = firstInsensitive.length - secondInsensitive.length;

        return lengthDifference || firstInsensitive >= secondInsensitive;
    });
    console.log(array.join('\n'));
}

print(['abbb', 'aaaaa', 'aabb', 'aaab']);