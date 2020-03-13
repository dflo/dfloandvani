var weddingDate = "September 12, 2020 18:30:00";

$(document).ready(function() {
  countdownTimerInit();
});

function countdownTimerInit() {
  var target_date = new Date(weddingDate).getTime();

  var countdownTimer = new Vue({
    el: "#countdownTimer",
    data: {
      countdown_days: "",
      countdown_hours: "",
      countdown_min: "",
      countdown_sec: ""
    }
  });

  setInterval(function() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    countdownTimer.countdown_days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    countdownTimer.countdown_hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    countdownTimer.countdown_min = parseInt(seconds_left / 60);
    countdownTimer.countdown_sec = parseInt(seconds_left % 60);
  }, 1000);

  return;
}
