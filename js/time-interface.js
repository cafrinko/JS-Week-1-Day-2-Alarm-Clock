function displayTime() {
    var time = moment().format('HH:mm');
    $('#time').html(time);
    setInterval(displayTime, 1000);
}
