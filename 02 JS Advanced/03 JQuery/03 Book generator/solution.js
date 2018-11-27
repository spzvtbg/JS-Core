function createBook (selector, titel, author, isbn) {
    let idCounter = 1;

    let bookDiv = $('<div>');
    bookDiv.attr('id', `book${idCounter++}`);

    let titelParagraph = $('<p>');
    titelParagraph.attr('class', 'title');
    titelParagraph.text(titel);

    let authorParagraph = $('<p>');
    authorParagraph.attr('class', 'author');
    authorParagraph.text(author);

    let isbnParagraph = $('<p>');
    isbnParagraph.attr('class', 'isbn');
    isbnParagraph.text(isbn);

    let selectBtn = $('<button>');
    selectBtn.text('Select');

    selectBtn.on('click', function () {
        bookDiv.css('border', '2px solid blue');
    });

    let deselectBtn = $('<button>');
    deselectBtn.text('Deselect');
    
    deselectBtn.on('click', function () {
        bookDiv.css('border', 'none');
    });

    bookDiv
        .append(titelParagraph)
        .append(authorParagraph)
        .append(isbnParagraph)
        .append(selectBtn)
        .append(deselectBtn);

    $(selector).append(bookDiv);
}