function aggregate (args) {
    const elements = Array.from(args);
    const options = {
        sum: () => {
            let result = 0;
            elements.forEach(element => result += element);
            return result;
        },
        sumParts: () => {
            let result = 0;
            elements.forEach(element => result += 1 / element);
            return result;
        },
        text: () => { 
            return elements.join('');
        }
    }

    for (const key in options) {
        console.log(options[key]());
    }
}

aggregate([1, 2, 3]);