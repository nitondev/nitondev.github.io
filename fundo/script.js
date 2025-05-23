function calculateCode() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let date = new Date(now); // adjustable copy

  let shift;
  if (hours >= 6 && hours < 14) {
    shift = "F";
  } else if (hours >= 14 && (hours < 23 || (hours === 23 && minutes < 18))) {
    shift = "E";
  } else {
    date.setDate(date.getDate() + 1);
    shift = "N";
  }

  // ISO 8601 week number calculation
  const isoDate = new Date(date);
  isoDate.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(isoDate.getFullYear(), 0, 1);
  const week = Math.ceil((((isoDate - yearStart) / 86400000) + 1) / 7);
  const weekday = (date.getDay() === 0) ? 7 : date.getDay();

  return `${String(week).padStart(2, '0')}${weekday}${shift}`;
}

function updateCode() {
  const code = calculateCode();
  document.getElementById("code").textContent = code;
}

updateCode();
setInterval(updateCode, 1000);
