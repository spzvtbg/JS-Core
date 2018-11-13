function print (sentences) {
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    sentences.forEach((line) => {
        let match = regex.exec(line);

        while (match) {
            console.log(match[0]);
            match = regex.exec(line);
        }
    });
}

print(['Join WebStars now for free, at www.web-stars.com now for free, at www.web-stars.com', 
'You can also support our partners:', 
'Internet - www.internet.com', 
'WebSpiders - www.webspiders101.com', 
'Sentinel - www.sentinel.-ko']);