function print (sentence) {
    let match;
    let pattern = /(([-]{0,1}[-0-9]+)\s*\*\s*([-]{0,1}[0-9]+\.{0,1}[0-9*]*))(?=\s*)/gm;
    
    while (match = pattern.exec(sentence)) {
        let result = +match[2] * +match[3];
        sentence = sentence.replace(match[1], result);
    }

    console.log(sentence);
}

print('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2 * 0.5 (deposit).');