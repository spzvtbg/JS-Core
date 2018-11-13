function print(number) {
    console.log(number.toString().indexOf('.') > 0 ? 'invalid' : number % 2 === 0 ? 'even' : 'odd');
}

print(23);