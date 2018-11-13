function filterByAge (filter, name1, age1, name2, age2) {
    let personsData = [ { name: name1, age: +age1 }, { name: name2, age: +age2 } ];

    personsData.forEach(person => {
        if (person.age >= +filter) {
            console.log(person);
        }
    });
}

filterByAge (16, 'H', 99, 'A', 16);