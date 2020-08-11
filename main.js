var container = document.getElementsByClassName('container');
[].forEach.call(container, function(x) {
  var currentTimer = 0,
      interval = 0,
      lastUpdateTime = new Date().getTime(),
      start = x.querySelector('button.start'),
      stop = x.querySelector('button.stop'),
      reset = x.querySelector('button.reset'),
      mins = x.querySelector('span.minutes'),
      secs = x.querySelector('span.seconds'),
      cents = x.querySelector('span.centiseconds');

  start.addEventListener('click', startTimer);
  stop.addEventListener('click', stopTimer);
  reset.addEventListener('click', resetTimer);
  function pad (n) {
    return ('00' + n).substr(-2);
    //lấy từ chuỗi từ vị trí length - 2 đến hết
}

function update () {
    var now = new Date().getTime(),
        dt = now - lastUpdateTime;

    currentTimer += dt;

    var time = new Date(currentTimer);
    //time = thoi gian tai currentTime(milliseconds)

    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

    lastUpdateTime = now;
}

function startTimer () {
    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 1);
    }
}

function stopTimer () {
    clearInterval(interval);
    interval = 0;
}

function resetTimer () {
    stopTimer();

    currentTimer = 0;

    mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
}

})