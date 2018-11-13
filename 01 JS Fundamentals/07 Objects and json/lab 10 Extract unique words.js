function task (sentences) {
    console.log(
        sentences.reduce((words, currentSentence) => {
        let currentWords = currentSentence.split(/\W/g).filter(x => x != '').map(x => x.trim().toLowerCase());

        currentWords.forEach(word => {
                if (words.indexOf(word) < 0) {
                    words.push(word);
                }
            });

        return words;
    }, []).join(', '));
}

task([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);