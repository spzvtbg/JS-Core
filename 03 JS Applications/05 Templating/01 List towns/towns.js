function attachEvents() {
    function loadTowns () {
        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        let input = $('#towns');
    
        let inputCollection = input.val().split(',').filter(x => x !== '');
        let townsList = { towns: inputCollection.map(x => { return { town: x.trim() }; }) };
        let townsTemplate = template(townsList);

        $('#root').html(townsTemplate);
        input.val('');
    }

    $('#btnLoadTowns').click(loadTowns);
}