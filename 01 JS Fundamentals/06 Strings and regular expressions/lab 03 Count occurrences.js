function print (pattern, text) {
    let matches = 0;
    let index = text.indexOf(pattern, 0);
    while (index >= 0) {
        matches++;
        index = text.indexOf(pattern, index + 1);
    }
    console.log(matches);
}

print('`', '`````');