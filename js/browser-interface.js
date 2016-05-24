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
