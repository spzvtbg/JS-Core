function print (quitzArgs) {
    let childNodes = '';

    for (let index = 0; index < quitzArgs.length; index += 2) {
        childNodes += `\n  <question>\n    ${quitzArgs[index]}\n  </question>`;
        childNodes += `\n  <answer>\n    ${quitzArgs[index + 1]}\n  </answer>`;
    }

    let xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>${childNodes}\n</quiz>`;

    console.log(xmlString);
}

print(['Dry ice is a frozen form of which gas?', 'Carbon Dioxide', 'What is the brightest star in the night sky?', 'Sirius']);