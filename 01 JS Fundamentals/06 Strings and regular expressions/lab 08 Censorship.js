function print (text, unallowedWords) {
    unallowedWords.forEach(word => {
        text = text.replace(new RegExp(word, 'g'), '-'.repeat(word.length));
    });

    console.log(text);
}

print('roses are red, violets are blue', [', violets are', 'red']);