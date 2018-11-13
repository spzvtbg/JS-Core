function task (jsons) {
    console.log('<table>');
    JSON.parse('[' + jsons.join(',') + ']')
        .forEach(current => {
            console.log('  <tr>');
            Object.keys(current).forEach(key => {
                console.log(`    <td>${current[key]}</td>`);
            })
            console.log('  </tr>');
        });
    console.log('</table>');
}

task([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);