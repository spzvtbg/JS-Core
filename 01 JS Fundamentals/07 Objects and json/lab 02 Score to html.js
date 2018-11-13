function task (jsonString) {
    const table = {
        begin: '<table>',
        end: '\n</table>',
        trBegin: '\n  <tr>',
        trEnd: '</tr>',
        thBegin: '<th>',
        thEnd: '</th>',
        tdBegin: '<td>',
        tdEnd: '</td>',
    }

    const escape = (string) => {
        let escapedString = string
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return escapedString;
    }

    let parsedObjects = JSON.parse(jsonString);
    let headers = Object.keys(parsedObjects[0]);

    let myTable = table.begin + table.trBegin;

    headers.forEach(header => {
        myTable += table.thBegin + header +  table.thEnd;
    });
    myTable += table.trEnd;

    for (const object of parsedObjects) {
        myTable += table.trBegin;

        for (const property in object) {
            myTable += table.tdBegin + escape(object[property]) +  table.tdEnd;
        }
        myTable += table.trEnd;
    }

    myTable += table.end;
    console.log(myTable);
}

task('[{"name":"P<>esho","score":479},{"name":"Gosho","score":205}]');