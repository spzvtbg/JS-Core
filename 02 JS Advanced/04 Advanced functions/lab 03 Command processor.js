function proceed (arrayOfStrings) {
    const commandPattern = {
        append: (result, string) => {
            return result + string;
        },
        removeStart: (result, n) => {
            return result.substring(n);
        },
        removeEnd: (result, n) => {
            return result.substring(0, result.length - n)
        },
        print: (result) => {
            console.log(result);
            return result;
        }
    };

    arrayOfStrings.reduce ((result, current) => {
        let [command, argument] = current.split(' ');
        return commandPattern[command](result, argument);
    }, '');
}

proceed ([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);