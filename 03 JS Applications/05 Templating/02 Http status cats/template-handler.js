$(() => {
    renderCatTemplate();
    $('div.card-block button').click(showCard);

    function showCard (e) {
        e.preventDefault();
        e.stopPropagation();

        let id = $(e.target).next('div').attr('id');
        $('div.card-block div').css('visibility', 'hidden');
        $(`#${id}`).css('visibility', 'visible');
    }

    function renderCatTemplate() {
        let catsCollection = window.cats;
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);
        let htmlCats = template({cats: catsCollection});
        $('#all-cats-statuses').append(htmlCats);
    }
});
