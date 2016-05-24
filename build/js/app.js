(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
