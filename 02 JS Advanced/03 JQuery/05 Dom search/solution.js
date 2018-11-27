function domSearch(containerId, searchSensitive) {
    let addSection = $('<div class="add-controls"><label>Enter text: <input><a class="button" style="display: inline-block">Add</a></label></div>');
    let searchSection = $('<div class="search-controls"><label>Search: <input></label></div>');
    let resultSection = $('<div class="result-controls"><ul class="items-list"></ul></label></div>');

    $(containerId).append(addSection).append(searchSection).append(resultSection);

    $('div.add-controls a.button').on('click', function () {
        let input = $('div.add-controls label input');
        let listItem = $(`<li class="list-item"><a class="button">X</a><strong>${input.val()}</strong></li>`);

        input.val('');
        $('div.result-controls ul.items-list').append(listItem);

        $('div.result-controls ul.items-list a.button').on('click', function () {
            $(this).parent().remove();
        });
    });

    $('div.search-controls label input').on('input', function () {
        let text = searchSensitive 
            ? $(this).val()
            : $(this).val().toLowerCase();

        $('div.result-controls ul.items-list li.list-item')
            .each((index, element) => {
                let jqElement = $(element);
                let item = searchSensitive 
                    ? jqElement.text()
                    : jqElement.text().toLowerCase();

                jqElement.css('display', item.indexOf(text) >= 0
                    ? ''
                    : 'none');
            });
    });
}
