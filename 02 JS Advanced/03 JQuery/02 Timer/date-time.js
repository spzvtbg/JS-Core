function demo () {
    Date.prototype.timeFormat = function () {
        return this.toTimeString().slice(0, 8).split(':');
    }

    let time = new Date(2018, 5, 5, 0, 0, 0);
    return time.timeFormat();
}

console.log(demo());