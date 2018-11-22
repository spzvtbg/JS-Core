function getInfo () {
    const stopName = $('#stopName');
    const bussesQueue = $('#buses');
    const stopId = $('#stopId').val();
    const address = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    
    const request = {
        url: address,
        method: 'GET',
        success: showBusses,
        error: showError
    };
    
    bussesQueue.empty();
    $.ajax(request);

    function showBusses (response) {
        const name = response.name;
        const buses = response.buses;

        if (!response || !name || !buses) { 
            showError();
            return;
        }

        stopName.text(name);

        for (const bus in buses) {
            const time = buses[bus];
            const li = $(`<li>`);

            li.text(`Bus ${bus} arrives in ${time} minutes`);
            bussesQueue.append(li);
        }
    }

    function showError () {
        stopName.text('Error');
    }
}