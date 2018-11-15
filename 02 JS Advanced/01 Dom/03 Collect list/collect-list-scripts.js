let isDisabeled = true;

function extractText() {

    let result = '';
    let items = document.getElementById('items').innerHTML.split('</li>');

    for (const item of items) {
        if (!item.includes('id')) {
            let clearValue = item.replace('<li>', '').replace('</li>');
            result += `<p class="result">${clearValue.toLowerCase()}</p>`;
        }
    }

    document.getElementById('result').innerHTML = result;

    if (isDisabeled) {
        isDisabeled = false;
        document.getElementById('result').setAttribute('class', '');
    } else {
        isDisabeled = true;
        document.getElementById('result').setAttribute('class', 'disabaled');
        document.getElementById('result').innerHTML = '';
        document.getElementById('btn').value = 'Hide';
    }
}