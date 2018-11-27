function wikiParser (textContainerId) {
    const patterns = [
        { h3: /(={3}([^=]+)={3})/gm },
        { h2: /(={2}([^=]+)={2})/gm },
        { h1: /(={1}([^=]+)={1})/gm },
        { a: /(\[{2}([^\[\]]+)\|([^\[\]]+)\]{2})/gm },
        { a: /(\[{2}([^\[\]]+)\]{2})/gm },
        { b: /('{3}([^']+)'{3})/gm },
        { i: /('{2}([^']+)'{2})/gm },
    ];

    let textHolder = $(textContainerId);
    let textToConvert = textHolder.text();

    patterns.forEach(pattern => {
        let tag = Object.keys(pattern)[0];
        let regex = pattern[tag];

        let matches = regex.exec(textToConvert);

        while (matches) {
            let toReplace = matches[1];
            let replaceWith = '';

            if (tag === 'a') {
                replaceWith = matches[3] 
                    ? `<${tag} href="/wiki/${matches[2]}">${matches[3]}</${tag}>`
                    : `<${tag} href="/wiki/${matches[2]}">${matches[2]}</${tag}>`
            } else {
                replaceWith = `<${tag}>${matches[2]}</${tag}>`; 
            }

            textToConvert = textToConvert.replace(toReplace, replaceWith);
            matches = regex.exec(textToConvert);
        }
    });

    $(textContainerId).html(textToConvert);
}