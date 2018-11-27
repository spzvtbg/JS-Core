function calendar (dateParameters) {
    const today = dateParameters[0];
    const month = dateParameters[1];
    const year = dateParameters[2];

    let date = new Date(year, month - 1, 1);
    let monthString = date.toLocaleString("en-us", { month: "long" });
    let firstDay = date.getDay() !== 0 ? date.getDay() : 7;
    let daysInMonth = new Date(year, month, 0).getDate();
    let dayCounter = (firstDay * -1) + 2;

    let calendarTable = $('<table>');
    calendarTable.append(`<caption>${monthString} ${year}</caption>`);
    calendarTable.append(`<tbody>`);
    calendarTable.append(`<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>`);
    
    for (let weeks = 0; weeks < 6; weeks++) {
        let week = $('<tr></tr>');

        for (let days = 0; days < 7; days++) {

            dayCounter === today 
                ? week.append($(`<td class="today">${dayCounter}</td>`))
                : dayCounter >= 1 && dayCounter <= daysInMonth
                ? week.append($(`<td>${dayCounter}</td>`))
                : week.append($(`<td></td>`));
                
            dayCounter++
        }

        calendarTable.append(week);
        if (dayCounter > daysInMonth) {
            break;
        }
    }

    $('#content').append(calendarTable);
}