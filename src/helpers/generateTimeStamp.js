export const generateTimeStamp = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  // Pad single-digit day and minute with leading zero
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;

  // Format time as 12-hour clock with AM/PM
  const formattedHour = hour % 12 || 12;
  const period = hour < 12 ? "AM" : "PM";
  const formattedTime = `${formattedHour}:${formattedMinute} ${period}`;

  // Create the timestamp object
  const timestamp = {
    time: formattedTime,
    date: `${formattedDay} ${month}`,
  };

  return timestamp;
};
