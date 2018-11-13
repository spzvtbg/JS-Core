function print (sentence, pattern) {
    let count = 0;
    let regex = new RegExp(`\\b${pattern}\\b`, 'gi');
    let mathces = sentence.match(regex);

    if (mathces) {
        count = mathces.length;
    }

    console.log(count);
}

print('The waterfall was so high, that the child couldn’t see its peak.', 'the');