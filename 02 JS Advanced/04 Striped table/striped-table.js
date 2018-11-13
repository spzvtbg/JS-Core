function setColor (color) {
    let count = 0;
    let parentCount = 0;
    let rows = Array.from(document.querySelectorAll('table tr td'));

    rows.forEach(element => { 
        parentCount += count++ % 2 === 0 ? 1 : 0;
        
        if (parentCount % 2 !== 0 && element.children.length == 0) {
            element.parentElement.style = `background-color: ${color}`;
        } 
    });
}

function colorize () {
    setColor('whitesmoke');
}

function setNormal () {
    setColor('white');
}

// function colorize () {
//     var count = 0;
//     var parentCount = 0;
//     var rows = Array.from(document.querySelectorAll('table tr td'));

//     rows.forEach(element => { 
//         parentCount += count++ % 2 === 0 ? 1 : 0;
        
//         if (parentCount % 2 !== 0) {
//             element.parentElement.style = 'background-color: teal'
//         } 
//     });
// }
