function lastMonth (args) {
    let currentMonth = new Date(args[2], args[1] - 1, 1);
    let lastMonthDate = new Date(args[2], args[1] - 2, 1);
    let x = Math.abs(currentMonth - lastMonthDate);
    console.log(Math.round(x / (24 * 60 * 60 * 1000)));
}

lastMonth([17, 3, 2002]);