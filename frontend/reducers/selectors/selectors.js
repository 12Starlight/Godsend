export const allNews = ({news}) => (
  Object.keys(news).map(id => news[id])
);

export const convert = (mil) => {
  let year, day, hour, minute, seconds;
  seconds = Math.floor(mil / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds
  };
}