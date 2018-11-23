function attachEvents() {
    const links = $('a');

    function select (e) {
        links.attr('class', 'button');
        $(e.target).attr('class', 'button selected');
    }

    links.on('click', select);
}
