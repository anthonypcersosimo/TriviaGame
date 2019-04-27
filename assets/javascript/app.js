var answerCorrect = 0;
var answerWrong = 12 - answerCorrect;

//Array of correct answers :)
var answerKey = ["1b", "2d", "3c", "4a", "5c", "6a", "7b", "8d", "9d", "10a", "11a", "12b"];

window.onload = function() {
  // Hide the Quiz Body on the page load
  $(".quiz-body").hide();
  $("#hideResults").hide();

  // Evaluate the score on a click of and radio button
  $("input[type='radio']").on("click", function () {
    var selectedKey = $(this).val();
    // console.log(selectedKey);
    // console.log(this);
    var selectedQuestion = $(this).attr("name");
    // console.log(selectedQuestion);
    var selectedKeyValue = $.inArray(selectedQuestion + selectedKey, answerKey) + 1;
    // console.log(selectedKeyValue);
    if (selectedKeyValue > 0) {
      answerCorrect = answerCorrect + 1;
      answerWrong = 12 - answerCorrect;
      selectedKey = "";
      selectedQuestion = "";
      selectedKeyValue = 0;
    };

    console.log(answerCorrect);
    console.log(answerWrong);
  });

   // Events to execute on begin quiz button
   $("#finish").on("click", function(){
    $("#hideResults").show();
    $(".quiz-body").hide();
    $("#answered-correct").text("Correct: " + answerCorrect);
    $("#answered-incorrect").text("Incorrect: " + answerWrong);
  });

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