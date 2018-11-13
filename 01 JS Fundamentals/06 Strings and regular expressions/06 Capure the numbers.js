function print (sentences) {
    console.log(sentences.reduce((sentence, current) => {
        let m =  current.match(/\d+/g);
        if (m) {
            sentence += `${m.join(' ')} `;
        }
        return sentence;
    }, ''));
}

print(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);