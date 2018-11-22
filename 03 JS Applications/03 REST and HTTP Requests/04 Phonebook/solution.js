$(function attachEvents () {
    const phonebook = $('#phonebook');

    function showContacts (response) {
        phonebook.empty();

        for (const key in response) {
            const contact = response[key];
            const btn = $(`<button>[Delete]</button>`);

            btn.on('click', function () {
                deleteContact(key);
            });

            phonebook.append($(`<li>${contact.person}: ${contact.phone} </li>`).append(btn));
        }
    }

    function refresh () {
        const request = {
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: showContacts
        };

        $.ajax(request);
    }

    function deleteContact (id) {
        const request = {
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,
            method: 'DELETE',
            success: refresh
        };

        $.ajax(request);
    }

    function createContact () {
        const name = $('#person');
        const phone = $('#phone');

        const request = {
            url: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                person: name.val(),
                phone: phone.val()
            }),
            success: refresh
        };

        name.val('');
        phone.val('');

        $.ajax(request);
    }

    $('#btnLoad').on('click', refresh);

    $('#btnCreate').on('click', createContact);
});
