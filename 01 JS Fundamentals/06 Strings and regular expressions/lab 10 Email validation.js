function print (email) {
    let match = email.match(/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/);
    console.log(match && match[0].length === email.length ? 'Valid' : 'Invalid');
}

print('----invalid@emai.bg');