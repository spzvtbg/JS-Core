function solution (dataCollection) {
    const nameRegex = /name:\s*(?<=\s)([a-zA-Z]+)(?=\s|,)/;
    const gradRegex = /Grade:\s*(?<=\s)(\d+)(?=\s|,)/;
    const avgrRegex = /score:\s*(?<=\s)([\d.]+)\s*/;

    let grades = {};

    for (const row of dataCollection) {
        const name = nameRegex.exec(row)[1];
        const grad = gradRegex.exec(row)[1];
        const avgr = +avgrRegex.exec(row)[1];

        if (avgr < 3) {
            continue;
        }

        let nextGrade = `${+grad + 1}`;

        if (!grades[nextGrade]) {
            grades[nextGrade] = { students: [], avg: 0 };
        }
        grades[nextGrade]['students'].push(name);
        grades[nextGrade]['avg'] += avgr;
    }

    Object.keys(grades)
        .sort((a, b) => +a - +b)
        .forEach((grade) => {
            const students = grades[grade]['students'];
            const average = (grades[grade]['avg'] / students.length).toFixed(2);

            console.log(`${grade} Grade`);
            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual grade from last year: ${average}`);
            console.log();
        });
}

solution ([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);