window.onload = () => {
    countdown(600);
};

function countdown(seconds) {
    let time = seconds;
    let watch = document.getElementById('time');
    var intervalValue = setInterval(decrement, 1000);

    function decrement () {
        time--;
        watch.value = Math.trunc(time / 60) + ':' + ('0' + (time % 60)).slice(-2);
    };
}

function stopTimer () {
    clearInterval(intervalValue);
}