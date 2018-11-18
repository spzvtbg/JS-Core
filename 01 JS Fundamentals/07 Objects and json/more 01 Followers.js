function solution (commands) {
    let users = commands.reduce((users, line) => {
        if (line.toLowerCase().indexOf('welcome') >= 0) {
            let [user] = line.split(/\s*welcome,\s*/gi).filter(x => x != '').map(x => x.trim());

            if (!users[user]) {
                users[user] = { name: user, followers: [], following: [], };
            }

        } else if (line.toLowerCase().indexOf('followed') >= 0) {
            let [userFollow, anotherUser] = line.split(/\s*followed\s*/gi).filter(x => x != '').map(x => x.trim());

            if (users[userFollow] && users[anotherUser] && userFollow != anotherUser) { 

                if (users[userFollow].following.indexOf(anotherUser) < 0) {
                    users[userFollow].following.push(anotherUser);
                }
                if (users[anotherUser].followers.indexOf(userFollow) < 0) {
                    users[anotherUser].followers.push(userFollow);
                }
            }
        }
        return users;
    }, {});

    let usersCollection = Object
        .keys(users)
        .map(key => users[key])
        .sort((a, b) => b.followers.length - a.followers.length || b.name.localeCompare(a.name));
    
    console.log(`Total users registered: ${usersCollection.length}`);

    usersCollection.forEach((currentUser, index) => {

        console.log(`${index + 1}. ${currentUser.name} : ${currentUser.following.length} following, ${currentUser.followers.length} followers`);
        
        if (index === 0) {
            currentUser.followers
                .sort((a, b) => a.localeCompare(b))
                .forEach((name) => console.log(`*  ${name}`));
        }
    });
}

solution ([
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'Welcome, JennaMarbles',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
])