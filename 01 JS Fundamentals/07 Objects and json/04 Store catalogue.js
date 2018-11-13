function task (lines) {
    let catalogue = lines
        .reduce((catalog, line) => {
            let [name, price] = line.split(/\b\s:\s\b/); //.map(x => x.trim());
            let letter = name[0].toUpperCase();

            if (!catalog[letter]) {
                catalog[letter] = [];
            }
            catalog[letter].push({ article: name, price: +price });

            return catalog;
        }, {});

    Object
        .keys(catalogue)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((key) => {
            return {
                key: key,
                articles: catalogue[key].sort((a, b) => a.article.toLowerCase().localeCompare(b.article.toLowerCase()))
            };
        })
        .forEach(obj => {
            console.log(obj.key);
            obj.articles.forEach(art => {
                console.log(`  ${art.article}: ${art.price}`);
            });
        });
}

// function task(arr) {
//     let firstMap=new Map();
//     for (let obj of arr) {
//         let line = obj.split(/\s:\s/);
//         let letter=line[0][0]
//         let product=line[0];
//         let price =line[1];
//         if(!firstMap.has(letter)){
//             firstMap.set(letter,new Map());
//         }
//         let secondMap=firstMap.get(letter);
//         secondMap.set(product,price);
//         firstMap.set(letter,secondMap);
//     }
//     firstMap=Array.from(firstMap).sort();
 
//     for (let [letter,secondMap] of firstMap) {
//         console.log(letter);
//         secondArr=Array.from(secondMap).sort();
//         for (let arr of secondArr) {
//             console.log("  "+arr[0]+": "+arr[1]);
//         }
//     }
// }

task([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);