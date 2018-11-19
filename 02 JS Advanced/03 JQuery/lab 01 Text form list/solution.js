function extractText () {
    let result = $('#items>li').toArray().map(x => x.innerText).join(', ');
    $('#result').text(result);
}