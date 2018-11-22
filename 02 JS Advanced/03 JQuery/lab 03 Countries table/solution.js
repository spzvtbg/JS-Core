function initializeTable () {
    const add_tr = function (e) {
        e.preventDefault();
        e.stopPropagaation();
    };

    $('#createLink').on('click', add_tr);
}