// function timer () {
//     let totalSeconds = 0;

//     function start () {
//         totalSeconds++;

//         let seconds = (totalSeconds % 60).toString();
//         let minutes = (Math.floor(totalSeconds / 60) % 60).toString();
//         let hours = (Math.floor(totalSeconds / 3600) % 24).toString();
        
//         $('#hours').text(hours.length < 2 ? `0${hours}` : hours);
//         $('#minutes').text(minutes.length < 2 ? `0${minutes}` : minutes);
//         $('#seconds').text(seconds.length < 2 ? `0${seconds}` : seconds);
//     }

//     var interval = null;

//     $('#start-timer').on('click', function () {
//         if (!interval) {
//             interval = setInterval(start, 1000);
//         }
//     });

//     $('#stop-timer').on('click', function () {
//         clearInterval(interval);
//         interval = null;
//     });
// } // 81.55 / 2.44

function timer () {
    let regex = /(\d{2})(?=$)/;
    let totalSeconds = 0;

    function start () {
        totalSeconds++;

        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 3600) % 24;
        
        $('#hours').text(regex.exec(`0${hours}`)[1]);
        $('#minutes').text(regex.exec(`0${minutes}`)[1]);
        $('#seconds').text(regex.exec(`0${seconds}`)[1]);
    }

    var interval = null;

    $('#start-timer').on('click', function () {
        if (!interval) {
            interval = setInterval(start, 1000);
        }
    });

    $('#stop-timer').on('click', function () {
        clearInterval(interval);
        interval = null;
    });
} // 81.86 / 2.41

