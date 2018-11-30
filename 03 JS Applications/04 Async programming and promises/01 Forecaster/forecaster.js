$(function attachEvents() {
    const placeHolder = "{path}";
    const basicHost = "https://judgetests.firebaseio.com{path}.json";
    const inputLocation = $('#location');
    const locations = {};
    const symbols = {
        "Sunny": '&#x2600;',		// ☀
        "Partly sunny": '&#x26C5;',	// ⛅
        "Overcast": '&#x2601;',	    // ☁
        "Rain":	'&#x2614;',         // ☂
        "Degrees": '&#176;'         // °
    };

    let searchedLocationName = '';
    let locationWeather = {};

    $('#submit').click(findLocations);

    function findLocations () {
        let getLocationsUrl = basicHost.replace(placeHolder, "/locations")

        $.get(getLocationsUrl)
            .then(getLocations)
            .catch(error);

        searchedLocationName = inputLocation.val();

        let locationCode = locations[searchedLocationName];

        let weatherTodayPath = `/forecast/today/${locationCode}`;
        let weatherTodayUrl = basicHost.replace(placeHolder, weatherTodayPath);

        let weatherUpcomingPath = `/forecast/upcoming/${locationCode}`;
        let weatherUpcomingUrl = basicHost.replace(placeHolder, weatherUpcomingPath);

        Promise
            .all([
                $.get(weatherTodayUrl),
                $.get(weatherUpcomingUrl)
            ])
            .then(showWether)
            .catch(error);
    }

    function getLocations (data) {
        data.forEach(location => {
            locations[location.name] = location.code;
        });
    }

    function getWeatherToday (data) {
        locationWeather["name"] = data.name;
        locationWeather["today"] = {
                condition: data.forecast.condition,
                high: data.forecast.high,
                low: data.forecast.low
        };
    }

    function getUpcomingWeather (data) {
        locationWeather["upcoming"] = [];

        data.forecast.forEach(info => {
            locationWeather.upcoming.push({
                condition: info.condition,
                high: info.high,
                low: info.low
            });
        });
    }

    function error (erorrs) {
        let forecaster = $("#forecast");
        forecaster.css("display", "block");
        forecaster.empty();
        forecaster.text('Error');
    }

    function showWether (results) {
        getWeatherToday(results[0]);
        getUpcomingWeather(results[1]);

        let forecaster = $("#forecast");
        forecaster.css("display", "block");

        let today = $("#current");
        let upcoming = $("#upcoming");

        let name = locationWeather.name;
        let condition = locationWeather.today.condition;
        let high = locationWeather.today.high;
        let low = locationWeather.today.low;
        let cels = symbols.Degrees;

        today
            .append(`<span class="condition symbol">${symbols[condition]}</span>`)
            .append($('<span class="condition"></span>')
                .append(`<span class="forecast-data">${name}</span>`)
                .append(`<span class="forecast-data">${low}${cels}/${high}${cels}</span>`)
                .append(`<span class="forecast-data">${condition}</span>`));

        locationWeather.upcoming.forEach(day => {
            let currentC = day.condition;
            let currentH = day.high;
            let currentL = day.low;

            upcoming
                .append($('<span class="upcoming"></span>')
                    .append(`<span class="symbol">${symbols[currentC]}</span>`)
                    .append(`<span class="forecast-data">${currentL}${cels}/${currentH}${cels}</span>`)
                    .append(`<span class="forecast-data">${currentC}</span>`));
        });
    }
});