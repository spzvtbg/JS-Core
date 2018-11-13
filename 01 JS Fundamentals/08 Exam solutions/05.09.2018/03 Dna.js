function proceed (lines) {
    let index = 0;
    let current = lines[index++];
    let regex = /^([a-z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)$/;
    let dnaInfo = { };

    while (current && current != 'Stop!') {
        let matches = regex.exec(current);

        if (!matches) {                                                             
            current = lines[index++];                                                                                   
            continue;                                                                                           
        }                                                                                                                           
                                                                                                        
        let [all, gene, length, count, organizm] = matches;
        gene = gene.replace(/!|@|#|\$|\?/g, '').trim();

        if (gene.length === +length) {

            if (!dnaInfo[organizm]) {
                dnaInfo[organizm] = 0;
            }
    
            dnaInfo[organizm] += +count;
        }

        current = lines[index++];
    }

    let dnaCollection = Object.keys(dnaInfo).reduce((collection, key) => {
            collection.push({ key, count: dnaInfo[key] });
            return collection;
        }, []);

    dnaCollection.sort((a, b) => a['count'] - b['count'] < 0);

    dnaCollection.forEach((obj) => {
        console.log(`${obj['key']} has genome size of ${obj['count']}`);
    });
}

proceed([
    '=12<<cat',
    '!vi@rus?=2--142',
    '?!cur##viba@cter!!=11--800<<cat',
    '!fre?esia#=7--450<<mouse',
    '@pa!rcuba@cteria$=13--351<<mouse',
    '!richel#ia??=8--900<<human',
    'Stop!'
]);