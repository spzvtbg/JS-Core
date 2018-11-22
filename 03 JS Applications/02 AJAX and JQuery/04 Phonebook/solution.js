$(() => {
    loadContacts();
    $('#create').on('click', create);

    function displayContacts (responce) {
        const contactsList = $('#contacts');
    
        contactsList.empty();
    
        Object.keys(responce)
            .sort((a,b) => a - b)
            .forEach(id => {
                const name = $(`<span class="col-3">${responce[id].name}</span>`);
                const phone = $(`<span class="col-3">${responce[id].phone}</span>`);
                const updateBtn = $(`<button id="${id}" class="col-2 update">[update]</button>`);
                const deleteBtn = $(`<button id="${id}" class="col-2 delete">[delete]</button>`);
                
                $('.update').on('click', deleteContact);
                $('.delete').on('click', deleteContact);

                contactsList.append($(`<li class="col-12">`).append(name, phone, updateBtn, deleteBtn));
            });
    }
    
    function GET (address) {
        return {
            url: address,
            method: "GET",
            success: displayContacts
        };
    }
    
    function POST (address, body) {
        return {
            url: address,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(body),
            success: loadContacts
        };
    }

    function DELETE (address) {
        return {
            url: address,
            method: "DELETE",
            success: loadContacts
        };
    }
    
    function create () {
        const contact = {
            name: $('#name').val(),
            phone: $('#phone').val(),
        };
    
        $.ajax(POST("https://phonebook-js-application.firebaseio.com/.json", contact));
    }

    function deleteContact (e) {
        const id = e.target.id;
    
        $.ajax(DELETE(`https://phonebook-js-application.firebaseio.com/${id}.json`));
    }
    
    function loadContacts () {
        $.ajax(GET("https://phonebook-js-application.firebaseio.com/.json"));
    }
});