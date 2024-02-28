const chrono = require('chrono-node');


function absoluteDate (relativeDate, refDate = null) {
    if (!refDate) refDate = new Date();
    let isoDate = chrono.parseDate(relativeDate, refDate);
    isoDate = isoDate.toString();

    const parts = isoDate.split(' ');
    const weekday = parts[0];
    const month = parts[1];
    const day = parts[2];
    const year = parts[3];

    return `${month} ${day}, ${year}`;
}

console.log(absoluteDate('this Friday', '2020-03-03'))



