function solution (articels) {
    let literal = '';
    return articels
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .reduce((result, current) => {
            let currentLiteral = current[0].toUpperCase();

            if (literal !== currentLiteral) {
                literal = currentLiteral;
                result += `${literal}\n`;
            } 
            
            return result += `  ${current.replace(' :', ':')}\n`;
        }, '');
}

console.log(solution ([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]));