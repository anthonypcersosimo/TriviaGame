var answerCorrect = 0;
var answerWrong = 12 - answerCorrect;

//Array of correct answers :)
var answerKey = ["q1b", "q2d", "q3c", "q4a", "q5c", "q6a", "q7b", "q8d", "q9d", "q10a", "q11a", "q12b"]

window.onload = function() {
  // Hide the Quiz Body on the page load
  $(".quiz-body").hide();

  // Evaluate 

  // Events to execute on begin quiz button
  $("#start").on("click", function(){
    start();
    $("#display").text("12 Minutes");
    $(".quiz-body").show();
  });
};

// Start Timer
var intervalId;

var clockRunning = false;
var time = 720;

function reset() {

  time = 720;


  $("#display").text("12:00");
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

  if (seconds === 0) {
    stop();
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
// End Timer