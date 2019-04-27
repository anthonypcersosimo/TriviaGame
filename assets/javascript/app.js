var answerCorrect = 0;
var answerWrong = 12 - answerCorrect;


window.onload = function() {
    $("#display").text("15 Minutes");
    $("#start").on("click", start);
  };

  // Start Timer
  var intervalId;
  
  var clockRunning = false;
  var time = 900;
  
  function reset() {
  
    time = 900;

  
    $("#display").text("15:00");
  }
  function start() {
    
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function stop() {
  
    clearInterval(intervalId);
    clockRunning = false;
  }
  
  function count() {
  
    time--;
  
    var converted = timeConverter(time);
    console.log(converted);
  
    $("#display").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "00" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  // End Timer