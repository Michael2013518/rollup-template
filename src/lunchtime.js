export default function getNextLunchtime(hours, minutes) {
  var lunchtime = new Date();

  lunchtime.setHours(hours);
  lunchtime.setMinutes(minutes);
  lunchtime.setSeconds(0);
  lunchtime.setMilliseconds(0);
  if (lunchtime < Date.now()) lunchtime.setDate(lunchtime.getDate() + 1);

  return lunchtime;
}