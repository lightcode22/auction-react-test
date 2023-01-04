const MS_IN_MIN = 60000;

export function formatTime(time) {
  if (!time instanceof Date) {
    return "--:--:--";
  }

  const minutes = "0" + time.getMinutes();
  const seconds = String(time.getSeconds()).padStart(2, 0);

  return `00:${minutes}:${seconds}`;
}

export function getAdjustedTime(difference) {
  return new Date(new Date().getTime() + difference);
}

export function getNextCountdownEnd(now, initial) {
  let offset = 3;

  if (initial) {
    offset = now.getMinutes() % 2 === 0 ? 2 : 1;
  }

  let until = new Date(now.getTime() + offset * MS_IN_MIN);

  return new Date(Math.floor(until.getTime() / MS_IN_MIN) * MS_IN_MIN);
}

export function getRemainingTime(countdownEnd, now) {
  return new Date(countdownEnd.getTime() - now.getTime());
}
