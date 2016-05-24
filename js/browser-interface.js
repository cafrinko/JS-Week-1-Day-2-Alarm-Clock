$(function(){
  displayTime();
  $('#form1').submit(function(event){
    event.preventDefault();
    alarmTime = $('#alarmTime').val();
  });
  
  function lolz() {
    if (time.innerHTML == alarmTime) {
      $('#output').text("same");
    } else {
      $('#output').text("not same");
    }
  };
  setInterval(lolz, 1000);
});
