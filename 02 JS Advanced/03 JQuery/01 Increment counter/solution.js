function increment(containerID) {
    const container = $(containerID);

    let counter = 0;

    function initializeContent (containerID) {
        container
            .append($(`<textarea class="counter" disabled="disabled">${counter}</textarea>`))
            .append($(`<button class="btn" id="incrementBtn">Increment</button>`))
            .append($(`<button class="btn" id="addBtn">Add</button>`))
            .append($(`<ul class="results"></ul>`));
    }

    initializeContent();

    $('#incrementBtn').on('click', function () {
        $('.counter').first().val(++counter)
    })

    $('#addBtn').on('click', function () {
        $('ul.results').first().append($(`<li>${counter}</li>`));
    })
}
