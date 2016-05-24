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
