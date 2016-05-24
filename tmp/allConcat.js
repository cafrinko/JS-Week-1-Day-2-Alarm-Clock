$(document).ready(function(){
  var alarm = $('#alarmTime').val();
});

var currentTime = null,
    date = null;

var update = function() {
  date = moment(new Date())
  currentTime.html(date.format('LTS'));
};

$(document).ready(function(){
    currentTime = $('#time')
    update();
    setInterval(update, 1000);
});
