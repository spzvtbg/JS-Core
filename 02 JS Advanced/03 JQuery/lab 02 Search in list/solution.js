function search () {
    const searchKey = $('#searchText').val();
    const townsCollection = $(`ul#towns li:contains(${searchKey})`);

    $(`#towns li`).css('font-weight', 'normal');
    $('#result').text(townsCollection.length);
    townsCollection.css('font-weight', 'bold');
}

search ();