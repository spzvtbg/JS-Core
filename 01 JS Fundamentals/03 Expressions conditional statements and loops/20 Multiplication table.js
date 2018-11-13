function print(n) {
    console.log('<table border="1">');
        
        for (let row = 0; row <= n; row++) {
            let tr = '  <tr>';
            let isHeadreRow = row === 0;

            tr += isHeadreRow ? '<th>x</th>' : `<th>${row}</th>`;
            
            for (let col = 1; col <= n; col++) {
                tr += isHeadreRow ? `<th>${col}</th>` : `<td>${row * col}</td>`;
            }

            tr += '</tr>';

            console.log(tr);
        }

    console.log('</table>');
}

print(5);