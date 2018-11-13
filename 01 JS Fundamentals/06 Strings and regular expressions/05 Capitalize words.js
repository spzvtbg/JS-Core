;function print(sentence){let regex=/((\w)(\w+))/gm;let matched=regex.exec(sentence);while(matched){let word=matched[1];let capitalized=word.replace(matched[2],matched[2].toUpperCase()).replace(matched[3],matched[3].toLowerCase());sentence=sentence.replace(word,capitalized);matched=regex.exec(sentence);}console.log(sentence);}

// function print (sentence) {
//     let regex = /((\w)(\w+))/gm;
//     let matched = regex.exec(sentence);

//     while (matched) {
//         let word = matched[1];
//         let capitalized = word
//             .replace(matched[2], matched[2].toUpperCase())
//             .replace(matched[3], matched[3].toLowerCase());

//         sentence = sentence.replace(word, capitalized);
//         matched = regex.exec(sentence);
//     }

//     console.log(sentence);
// }

print('Capitalize thesE words');