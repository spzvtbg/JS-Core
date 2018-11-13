function calendar (date) {

    const daysInWeek = 7;
    const maxWeeks = 6;

    let daysInMonth = (firstMont, secondMonth) => {
        const daysInMiliseconds = 1000 * 60 * 60 * 24;

        let difference = Math.abs(firstMont - secondMonth) / daysInMiliseconds;

        return Math.round(difference);
    };

    let datesGenerator = (date) => {
        let currentDay = +date[0];
        let currentMonth = +date[1] - 1;
        let currentYear = +date[2];

        
        let curentMonthDate = new Date(currentYear, currentMonth, currentDay);
        let curentMonthDateForDays = new Date(currentYear, currentMonth, 1);

        let prevYear = currentYear;
        let prevMonth = currentMonth - 1;

        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear -= 1;
        }

        let previousMonthDate = new Date(prevYear, prevMonth, 1);

        let nextYear = currentYear;
        let nextMonth = currentMonth + 1;

        if (nextMonth > 11) {
            nextMonth = 0;
            nextYear += 1;
        }

        let nextMonthDate = new Date(nextYear, nextMonth, 1);
    
        let previousMonthDays = daysInMonth(curentMonthDateForDays, previousMonthDate);
        let currentMonthDays = daysInMonth(nextMonthDate, curentMonthDateForDays);

        return {
            day: currentDay,
            dateNow: curentMonthDate,
            prevMonthDays: previousMonthDays,
            currMonthDays: currentMonthDays,
        }
    };

    let weeksGenerator = (model) => {
        model.dateNow.setDate(1);

        let monthBegin = model.dateNow;
        let startIndex = (monthBegin.getDay() - 1) * -1;
        let currentDays = model.currMonthDays;
        let previousDays = model.prevMonthDays;
        let isLastWeek = false;
        let weeks = [];
    
        for (let week = 0; week < maxWeeks; week++) {
    
            let currentWeek = [];
    
            for (let day = 0; day < daysInWeek; day++) {
                if (startIndex <= currentDays && startIndex > 0) {
                    currentWeek.push(startIndex);
                } else   if (startIndex > currentDays) {
                    isLastWeek = true;
                    currentWeek.push(startIndex - currentDays);
                } else if (startIndex <= 0) {
                    currentWeek.push(previousDays + startIndex);
                }
    
                startIndex++;
            }
    
            weeks.push(currentWeek);
    
            if (startIndex > currentDays || isLastWeek) {
                break;
             }
        }

        return weeks;
    };

    let calendarHtmlGenerator = (weeks, currentDay) => {
        let calendarHtml = '<table>\n  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

        let weeksLength = weeks.length;
        for (let count = 0; count < weeksLength; count++) {
           const week = weeks[count];
            
           calendarHtml += '\n  <tr>';
           for (let index = 0; index < week.length; index++) {
               const day = week[index];
               
               if (count === 0 && day > 7) {
                   calendarHtml += `<td class="prev-month">${day}</td>`;
               } else if (count === weeksLength - 1 && day < 7) {
                    calendarHtml += `<td class="next-month">${day}</td>`;
                } else if (day === currentDay) {
                    calendarHtml += `<td class="today">${day}</td>`;
               } else {
                    calendarHtml += `<td>${day}</td>`;
               }
           }

           calendarHtml += '</tr>';
        }

        calendarHtml += '\n</table>';

        return calendarHtml;
    };

    let datesModel = datesGenerator(date);
    let weeks = weeksGenerator(datesModel);

    let currentMonthCalendar = calendarHtmlGenerator(weeks, datesModel.day);

    return currentMonthCalendar;
}

function showCalendar () {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let calendarHtml = calendar([day, month, year]);

    document.getElementById('calendar').innerHTML = calendarHtml;
    document.getElementById('calendarCode').innerText = calendarHtml;
}

// console.log(calendar([5, 12, 2018]));