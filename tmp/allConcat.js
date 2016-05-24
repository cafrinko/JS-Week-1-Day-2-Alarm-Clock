$(function(){
  // displayTime();
  $('#form1').submit(function(event){
    event.preventDefault();
    alarmTime = $('#alarmTime').val();
  });
  
  function lolz() {
    var time = moment().format('HH:mm');
    $('#time').html(time);
    if (time.innerHTML == alarmTime) {
      $('#output').text("same");
    } else {
      $('#output').text("not same");
    }
  };
  setInterval(lolz, 1000);
});

// function displayTime() {
//     var time = moment().format('HH:mm');
//     $('#time').html(time);
//     setInterval(displayTime, 1000);
// }
