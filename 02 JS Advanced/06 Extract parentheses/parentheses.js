function extractParentheses(elementId) {
    let content = document.getElementById(elementId).textContent;
    let startIndex = 0;
    let endIndex = 0;
    let hasFound = true;
    let currentSubstring = '';
    let resultStringArray = [];

    while (hasFound) {
        startIndex = content.indexOf('(', startIndex);
        endIndex = content.indexOf(')', endIndex);

        if (startIndex <= 0 || endIndex <= 0) {
            hasFound = false;
            continue;
        }

        let currentSubstring = content.substring(++startIndex, ++endIndex - 1);
        resultStringArray.push(currentSubstring);
    }

    return resultStringArray.join('; ');
}
                //     3  6  10    16  6  23    29  6   36    42  6  49
extractParentheses('asd(fghjkl)ö asd(fghjkl)ö asd(fghjkl)ö asd(fghjkl)ö');