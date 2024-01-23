export const getTimeLeft = (date, frame) => {
  try {
    date = new Date(date);
  } catch (e) {
    return "00h : 00m : 00s";
  }
  if (date > new Date()) return { hours: -1, minutes: -1, seconds: -1 };
  date.setDate(date.getDate() + frame);
  let timeLeft = new Date(date) - new Date();
  let hours = Math.floor(((timeLeft / (1000 * 60 * 60)) / 24) * 24 + (timeLeft / (1000 * 60 * 60)) % 24);//האם לחלק גם לימים
  let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  let seconds = Math.floor((timeLeft / 1000) % 60);
  
  //hours = hours < 10 ? "0" + hours : hours;
  //minutes = minutes < 10 ? "0" + minutes : minutes;
  //seconds = seconds < 10 ? "0" + seconds : seconds;

  return { hours, minutes, seconds };
};

export const hebDate = (date) => {
  try {
    date = new Date(date);
  } catch (e) {}
  const months = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return day + " " + months[monthIndex] + ", " + year;
};
