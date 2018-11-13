function print (array) {
    array.forEach(number => console.log(Math.log2(number)));
}

print([ 1024, 1048576, 256, 1, 2 ]);