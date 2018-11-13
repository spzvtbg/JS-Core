function printList (lastElement) {
    let ul = [];

    ul.push('<ul>');

    for (let index = 1; index <= lastElement; index++) {
        let color = index % 2 === 1 ? 'green' : 'blue';
        ul.push(`  <li><span style='color:${color}'>${index}</span></li>`);
    }

    ul.push('</ul>');
    ul.forEach(element => console.log(element));
}

printList(10);