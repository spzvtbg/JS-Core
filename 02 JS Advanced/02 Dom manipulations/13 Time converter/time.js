function attachEventsListeners () {
    const commandPattern = {
        days: function () {
            const value = document.getElementById('days').value;

            document.getElementById('hours').value = value * 24;
            document.getElementById('minutes').value = value * 24 * 60;
            document.getElementById('seconds').value = value * 24 * 60 * 60;
        },
        hours: function () {
            const value = document.getElementById('hours').value;

            document.getElementById('days').value = value / 24;
            document.getElementById('minutes').value = value * 60;
            document.getElementById('seconds').value = value * 60 * 60;
        },
        minutes: function () {
            const value = document.getElementById('minutes').value;

            document.getElementById('days').value = value / 24 / 60;
            document.getElementById('hours').value = value / 60;
            document.getElementById('seconds').value = value * 60;
        },
        seconds: function () {
            const value = document.getElementById('seconds').value;
            
            document.getElementById('days').value = value / 24 / 60 / 60;
            document.getElementById('hours').value = value / 60 / 60;
            document.getElementById('minutes').value = value / 60;
        },
    }

    document.getElementById('daysBtn').addEventListener('click', commandPattern['days']);
    document.getElementById('hoursBtn').addEventListener('click', commandPattern['hours']);
    document.getElementById('minutesBtn').addEventListener('click', commandPattern['minutes']);
    document.getElementById('secondsBtn').addEventListener('click', commandPattern['seconds']);

    // document.querySelectorAll('input[id$="Btn"]').forEach(btn => {
    //     let command = btn.id.replace('Btn', '').toLowerCase();
    //     btn.addEventListener('click', commandPattern[command]);
    // });
}