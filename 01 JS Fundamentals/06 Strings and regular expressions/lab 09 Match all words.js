function print (text) {
    console.log(text.match(/\w+/g).join('|'));
}

print('A Regular Expression needs to have the global flag in order to match all occurrences in the text');