function renderCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendarDiv = document.getElementById("calendar");
    let calendarHTML = '<table border="1">';
    calendarHTML += '<tr><th id="month" colspan="7">' + monthName(month) + ' ' + year + '</th></tr>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let day = 1;
    for (let i = 0; i < 6; i++) {                                           /* A month can have 6 week line at the most */
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {                                      /* A week can have only 7 days */
            if ((i === 0 && j < firstDayOfWeek) || day > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += '<td';

                /* If the day is today*/
                if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    calendarHTML += ' style="background-color: purple;"';
                }

                /* Adding each day to the table*/ 
                calendarHTML += '>' + day + '</td>';
                day++;
            }
        }
        calendarHTML += '</tr>';
        if (day > daysInMonth) {    /* Day exceeds number of days in month */
            break;
        }
    }

    calendarHTML += '</table>';
    calendarDiv.innerHTML = calendarHTML;
}

function monthName(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

renderCalendar();