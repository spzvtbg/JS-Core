function initializeTable () {
    const up = 'Up';
    const down = 'Down';
    const del = 'Delete';

    const actions = {
        create: function (table, country, capital) {
            table.tr()
                .append(table.td(country))
                .append(table.td(capital))
                .append(table.td()
                    .append(table.btn(up))
                    .append(table.btn(down))
                    .append(table.btn(del)))
                .appendTo($('#countriesTable'));

            table.hideUp();
            table.hideDown();
        },
        delete: function (e) {
            const tr = $(e.target).parent().parent();

            tr.remove();
            table.hideUp();
            table.hideDown();
        },
        up: function (e) {
            const tr = $(e.target).parent().parent();

            tr.insertBefore(tr.prev());
            table.hideUp();
            table.hideDown();
        },
        down: function (e) {
            const tr = $(e.target).parent().parent();

            tr.insertAfter(tr.next());
            table.hideUp();
            table.hideDown();
        }, 
    };

    const table = {
        tr: function () {
            return $('<tr></tr>');
        },
        td: function (content) {
            return $(`<td>${content ? content : ''}</td>`);
        },
        btn: function (action) {
            return $(`<a href="#">[${action}]</a>`).on('click', actions[action.toLowerCase()]);
        },
        hideUp: function () {
            const upElements = $('#countriesTable tr td:last-child a:contains(Up)');

            upElements.show();
            upElements.first().hide();
        },
        hideDown: function () {
            const downElements = $('#countriesTable tr td:last-child a:contains(Down)');

            downElements.show();
            downElements.last().hide();
        },
    };

    function initializeTableData (table) {
        const countriesTable = $('#countriesTable');

        table.tr()
            .append(table.td('Bulgaria'))
            .append(table.td('Sofia'))
            .append(table.td()
                .append(table.btn(up))
                .append(table.btn(down))
                .append(table.btn(del)))
            .appendTo(countriesTable);

        table.tr()
            .append(table.td('Germany'))
            .append(table.td('Berlin'))
            .append(table.td()
                .append(table.btn(up))
                .append(table.btn(down))
                .append(table.btn(del)))
            .appendTo(countriesTable);

        table.tr()
            .append(table.td('Russia'))
            .append(table.td('Moscow'))
            .append(table.td()
                .append(table.btn(up))
                .append(table.btn(down))
                .append(table.btn(del)))
            .appendTo(countriesTable);

        table.hideUp();
        table.hideDown();
    }

    initializeTableData(table);

    $('#createLink').on('click', function (e) {
        const country = $('#newCountryText');
        const capital = $('#newCapitalText');

        actions.create(table, country.val(), capital.val());

        country.val('');
        capital.val('');
    });
}

// to slow but 100 / 100
// function initializeTable () {
//     const up = 'Up';
//     const down = 'Down';
//     const del = 'Delete';
//     const countriesTable = $('#countriesTable');

//     const actions = {
//         create: function (country, capital) {
//             table.tr()
//                 .append(table.td(country))
//                 .append(table.td(capital))
//                 .append(table.td()
//                     .append(table.btn(up))
//                     .append(table.btn(down))
//                     .append(table.btn(del)))
//                 .appendTo(countriesTable);

//             table.hideUp();
//             table.hideDown();
//         },
//         delete: function (e) {
//             const tr = $(e.target).parent().parent();

//             tr.remove();
//             table.hideUp();
//             table.hideDown();
//         },
//         up: function (e) {
//             const tr = $(e.target).parent().parent();

//             tr.insertBefore(tr.prev());
//             table.hideUp();
//             table.hideDown();
//         },
//         down: function (e) {
//             const tr = $(e.target).parent().parent();

//             tr.insertAfter(tr.next());
//             table.hideUp();
//             table.hideDown();
//         }, 
//     };

//     const table = {
//         tr: function () {
//             return $('<tr></tr>');
//         },
//         td: function (content) {
//             return $(`<td>${content ? content : ''}</td>`);
//         },
//         btn: function (action) {
//             return $(`<a href="#">[${action}]</a>`).on('click', actions[action.toLowerCase()]);
//         },
//         hideUp: function () {
//             const upElements = $('#countriesTable tr td:last-child a:contains(Up)');

//             upElements.show();
//             upElements.first().hide();
//         },
//         hideDown: function () {
//             const downElements = $('#countriesTable tr td:last-child a:contains(Down)');

//             downElements.show();
//             downElements.last().hide();
//         },
//     };

//     function initializeTableData () {
//         actions.create('Bulgaria', 'Sofia');
//         actions.create('Germany', 'Berlin');
//         actions.create('Russia', 'Moscow');
//     }

//     initializeTableData();

//     $('#createLink').on('click', function (e) {
//         const country = $('#newCountryText');
//         const capital = $('#newCapitalText');

//         actions.create(country.val(), capital.val());

//         country.val('');
//         capital.val('');
//     });
// }