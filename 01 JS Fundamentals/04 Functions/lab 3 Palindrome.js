function print (palindrome) {
    const text = palindrome + '';
    const length = text.length;
    const middle = Math.round(length / 2);
    const parts = {
        left: text.substring(0, middle),
        right: Array.from(text.substring(length % 2 != 0 ? middle - 1 : middle, length)).reverse().join('')
    };

    parts.left === parts.right 
        ? console.log('true')
        : console.log('false');
}

print('racecar');