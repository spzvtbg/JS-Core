function attachEvents() {
    const click = 'click';
    const truty = 'true';
    const falsy = 'false';
    const color = 'background-color';
    const selected = 'data-selected';
    const listItems = $('#items');

    function selecting (e) {
        const target = $(e.target);

        if (target.attr(selected) === truty) {
            target.attr(selected, falsy);
            target.css(color, '#FFF');
        } else {
            target.attr(selected, truty);
            target.css(color, '#DDD');
        }

    }

    function listTowns (e) {
        const selectedTowns = $(`*[${selected}="${truty}"]`)
            .toArray()
            .map(x => x.textContent)
            .join(', ');

        $('#selectedTowns')
            .text(`Selected towns: ${selectedTowns}`);

    }

    listItems.attr(selected, falsy);
    listItems.on(click, selecting);
    $('#showTownsButton').on(click, listTowns);
}
