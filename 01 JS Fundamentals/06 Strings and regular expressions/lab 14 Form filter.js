function print (username, email, phone, sentences) {
    let pattern = /(<![a-zA-Z]+!>)+|(<@[a-zA-Z]+@>)+|(<\+[a-zA-Z]+\+>)/;
    let regex = new RegExp(/(<![a-zA-Z]+!>)+|(<@[a-zA-Z]+@>)+|(<\+[a-zA-Z]+\+>)/, "gm");

    sentences.forEach(sentence => {
        let result = pattern.exec(sentence);
        while (result) {
            if (result[1]) {
                sentence = sentence.replace(result[1], username)
            }
            if (result[2]) {
                sentence = sentence.replace(result[2], email)
            }
            if (result[3]) {
                sentence = sentence.replace(result[3], phone)
            }
            result = pattern.exec(sentence);
        }
        console.log(sentence);
    });
}

// function print (username, email, phone, sentences) {
//     sentences.forEach(line => {
//         line = line.replace(/<![a-zA-Z]+!>/g, username);
//         line = line.replace(/<@[a-zA-Z]+@>/g, email);
//         line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
//         console.log(line);
//     });
// }


print('Pesho', 'pesho@softuni.bg', '90-60-90', [
    'Hello, <!username!>! Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);