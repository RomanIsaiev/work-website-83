function getEndOfDay() {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(24, 0, 0, 0);
  return endOfDay;
}

function getTimeRemaining(endtime) {
  const t = endtime - new Date();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor(t / (1000 * 60 * 60));

  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function startDailyTimer(id, hoursClass, minutesClass, secondsClass) {
  const clock = document.getElementById(id);
  if (!clock) return;

  const hoursSpan = clock.querySelector(hoursClass);
  const minutesSpan = clock.querySelector(minutesClass);
  const secondsSpan = clock.querySelector(secondsClass);

  function updateClock() {
    const endtime = getEndOfDay();
    const t = getTimeRemaining(endtime);

    if (hoursSpan) hoursSpan.innerHTML = String(t.hours).padStart(2, "0");
    if (minutesSpan) minutesSpan.innerHTML = String(t.minutes).padStart(2, "0");
    if (secondsSpan) secondsSpan.innerHTML = String(t.seconds).padStart(2, "0");
  }

  updateClock();
  setInterval(updateClock, 1000);
}

startDailyTimer("countdown", ".hours", ".minutes", ".seconds");
startDailyTimer("countdown-two", ".hours-two", ".minutes-two", ".seconds-two");
