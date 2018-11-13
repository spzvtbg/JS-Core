function print (emails) {
    console.log(emails
        .map((email) => {
            let index = email.indexOf('@');
            let username = email.substring(0, index) + '.'; 
            let domain = email.substring(index + 1);
            let usernameCode = domain.match(/[\w]+/gm)
                .reduce((usernameComponents, currentMatch, matchIndex) => {
                    return usernameComponents += currentMatch[0];
                }, '');

            return username + usernameCode;
        })
        .join(', '));
}

print(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);