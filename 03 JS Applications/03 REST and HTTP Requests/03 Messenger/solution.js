$(function attachEvents () {
    const address = 'https://js-apps-c2c3a.firebaseio.com/messenger.json';

    function updateMessages (response) {
        const messagesArea = $('#messages'); 

        let messeges = Object
            .keys(response)
            .map(x => response[x])
            .sort((a, b) => a['timestamp'] - b['timestamp'])
            .reduce((messages, message) => {
                return messages + `${message.author}: ${message.content}\n`;
            }, '');

        messagesArea.text(messeges);
    }

    function refresh () {
        const request = {
            url: address,
            method: 'GET',
            success: updateMessages
        };

        $.ajax(request);
    }

    $('#submit').on('click', function () {
        const author = $('#author').val();
        const content = $('#content').val();
        const request = {
            url: address,
            method: 'POST',
            cocntentType: 'application/json',
            data:JSON.stringify({
                author: author,
                content: content,
                timestamp: Date.now().toPrecision() 
            }),
            success: refresh
        };

        $.ajax(request);
    });

    $('#refresh').on('click', function () {
        refresh();
    });

    refresh();
});