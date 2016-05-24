$(document).ready(function(){
  $('#form1').submit(function(event){
    event.preventDefault();
    var alarm = $('#alarmTime').val();
    var output;
    if (alarm === currentTime) {
      output = "lol";
    } else {
      output = "not yet";
    }
    $("#alarmy").text(output);
  });
});

var currentTime = null;
var date = null;

var update = function() {
  date = moment(new Date());
  currentTime.html(date.format('LT'));
};

$(document).ready(function(){
    currentTime = $('#time');
    update();
    setInterval(update, 1000);
});
