function attachEvents () {
    function constraints () {

        let createRequest = function (forMethod, urlParameter, body) {

            const baseURL = "https://baas.kinvey.com/appdata/kid_SkrfltaC7/biggestCatches";

            let request = {};

            request['url'] = urlParameter ? baseURL + `/${urlParameter}` : baseURL;
            request['contentType'] = `application/json; charset=utf-8`;
            request['method'] = forMethod;
            request['data'] = body ? body : {};

            return  request;
        }

        let getCurrentFisher = function (selector) {
            let fisher = {};
    
            $(selector).toArray().forEach(input => {
    
                    let jInput = $(input);
                    let value = jInput.val();
                    let property = input.classList[0];
    
                    
                    jInput.val('');
                    fisher[property] = !value ? 'none' : (+value ? +value : value) ;
                });
    
            return JSON.stringify(fisher);
        }

        let reloadHtmlContent = function (selector, data, updateFunc, deleteFunc) {

            let fishers = $(selector);
            fishers.empty();
    
            for (const index in data) {
    
                let fisherHtmlText = bindFisherHTMLTemplate(data[index], updateFunc, deleteFunc);
    
                fishers.append($(fisherHtmlText));
            }

            function bindFisherHTMLTemplate (fisher, updateFunc, deleteFunc) {

                let template = '<div class="catch" data-id="{{{_id}}}">\n' +
                                 '	  <label>Angler</label>\n' +
                                 '	  <input type="text" class="angler" value="{{{angler}}}"/>\n' +
                                 '	  <label>Weight</label>\n' +
                                 '	  <input type="number" class="weight" value="{{{weight}}}"/>\n' +
                                 '	  <label>Species</label>\n' +
                                 '	  <input type="text" class="species" value="{{{species}}}"/>\n' +
                                 '	  <label>Location</label>\n' +
                                 '	  <input type="text" class="location" value="{{{location}}}"/>\n' +
                                 '	  <label>Bait</label>\n' +
                                 '	  <input type="text" class="bait" value="{{{bait}}}"/>\n' +
                                 '	  <label>Capture Time</label>\n' +
                                 '	  <input type="number" class="captureTime" value="{{{captureTime}}}"/>\n' +
                                 '</div>\n'

                for (const key in fisher) {
                    template = template.replace(`{{{${key}}}}`, fisher[key]);
                }

                let jTempate = $(template)
                    .append($('<button class="update">Update</button>').click(updateFunc))
                    .append($('<button class="delete">Delete</button>').click(deleteFunc));
        
                return jTempate;
            }
        }

        let setHeaders = function (xhr) {
            xhr.setRequestHeader("Authorization", `Basic ${btoa('demo:demo')}`);
        }

        return {
            createRequest: createRequest,
            getCurrentFisher: getCurrentFisher,
            reloadHtmlContent: reloadHtmlContent,
            setHeaders: setHeaders
        }
    }

    let app = constraints();

    $.ajaxSetup({ beforeSend: app.setHeaders })

    $('#addForm button.add').click(CREATE);
    $('#aside button.load').click(READ);

    function CREATE () {
        let fisher = app.getCurrentFisher('#addForm input');
        let createRequest = app.createRequest("POST", "", fisher);

        $.ajax(createRequest).then(READ).catch((e) => console.log(e));
    }

    function READ () {
        let readRequest = app.createRequest("GET", "", {});

        $.ajax(readRequest).then((data) => { 
            app.reloadHtmlContent('#catches', data, UPDATE, DELETE); 
        }).catch((e) => console.log(e));
    }

    function UPDATE (e) {

        let routeParameter = $(e.target).parent().attr('data-id');
        let fisher = app.getCurrentFisher(`div[data-id="${routeParameter}"] input`);
        let updateRequest = app.createRequest("PUT", routeParameter, fisher);

        $.ajax(updateRequest).then(READ).catch((e) => console.log(e));
    }

    function DELETE (e) {
        let routeParameter = $(e.target).parent().attr('data-id');
        let daleteRequest = app.createRequest("DELETE", routeParameter, {});

        $.ajax(daleteRequest).then(READ).catch((e) => console.log(e));
    }
}