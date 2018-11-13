function print (dataCollection) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let element of dataCollection) {
        let match = regex.exec(element);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

print(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);