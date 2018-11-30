function attachEvents () {
    const constants = { 
        baseURL: "https://baas.kinvey.com/appdata/kid_SkrfltaC7/biggestCatches",
        contentType: "application/json",
        setAuthorization: function (xhr) {
            xhr.setRequestHeader("Authorization", `Basic ${btoa('demo:demo')}`);
        },
        GET: "GET",
        DELETE: "DELETE",
        POST: "POST",
        PUT: "PUT",
        fisherTemplate: '<div class="catch" data-id="{{{_id}}}">\n' +
                        '	 <label>Angler</label>\n' +
                        '	 <input type="text" class="angler" value="{{{angler}}}"/>\n' +
                        '	 <label>Weight</label>\n' +
                        '	 <input type="number" class="weight" value="{{{weight}}}"/>\n' +
                        '	 <label>Species</label>\n' +
                        '	 <input type="text" class="species" value="{{{species}}}"/>\n' +
                        '	 <label>Location</label>\n' +
                        '	 <input type="text" class="location" value="{{{location}}}"/>\n' +
                        '	 <label>Bait</label>\n' +
                        '	 <input type="text" class="bait" value="{{{bait}}}"/>\n' +
                        '	 <label>Capture Time</label>\n' +
                        '	 <input type="number" class="captureTime" value="{{{captureTime}}}"/>\n' +
                        '	 <button class="update">Update</button>\n' +
                        '	 <button class="delete">Delete</button>\n' +
                        '</div>\n'
    };

    function bindFisherHTMLTemplate (fisher, template) {

        for (const key in fisher) {
            template = template.replace(`{{{${key}}}}`, fisher[key]);
        }

        return template;
    }

    function getCurrentFisher (selector) {
        let fisher = {};

        $(selector).toArray().forEach(input => {

                let jInput = $(input);
                let value = jInput.val();
                let property = input.classList[0];

                jInput.val('');
                fisher[property] = value;
            });

        return JSON.stringify(fisher);
    }

    function tryAddFisher () {

        let createRequest = {
            url: constants.baseURL,
            method: constants.POST,
            data: getCurrentFisher('#addForm input')
        };

        $.ajax(createRequest)
        .then(tryLoadFishers)
        .catch(logError);
    }

    function tryLoadFishers () {
        
        let readRequest = {
            url: constants.baseURL,
            method: constants.GET
        };

        $.ajax(readRequest)
        .then(loadHtml)
        .catch(logError);
    }

    function loadHtml (data) {
        console.log(data);

        let fishers = $('#catches');
        fishers.html('');

        for (const index in data) {

            let fisherHtmlText = bindFisherHTMLTemplate(data[index], constants.fisherTemplate);

            fishers.append($(fisherHtmlText));
        }

        addEvents();
    }

    function tryUpdateFisher (target) {
        let id = $(target).parent().attr('data-id');

        let updateRequest = {
            url: constants.baseURL + `/${id}`,
            method: constants.PUT,
            data: getCurrentFisher(`div[data-id="${id}"] input`)
        };

        $.ajax(updateRequest)
        .then(tryLoadFishers)
        .catch(logError);
    }

    function tryDeleteFisher (target) {
        let id = $(target).parent().attr('data-id');

        let deleteRequest = {
            url: constants.baseURL + `/${id}`,
            method: constants.DELETE
        };

        $.ajax(deleteRequest)
        .then(tryLoadFishers)
        .catch(logError);
    }

    function addEvents () {
        $('#catches button.update').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
    
            tryUpdateFisher(e.target);
        });

        $('#catches button.delete').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            tryDeleteFisher(e.target);
        });
    }

    function logError (e) {
        console.log(e);
    }

    $.ajaxSetup({ 
        beforeSend: constants.setAuthorization,
        contentType: constants.contentType,
    });

    $('#addForm button.add').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        tryAddFisher();
    });

    $('#aside button.load').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        tryLoadFishers();
    });
}
