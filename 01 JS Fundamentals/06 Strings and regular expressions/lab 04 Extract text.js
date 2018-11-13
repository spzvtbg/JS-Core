function print (text) {
    let matches = text.match(/\((.+?)\)/g);

    if (matches) {
        console.log(matches.map(element => element
            .replace('(', '').replace(')', ''))
            .join(', '));
    }
}

print('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');