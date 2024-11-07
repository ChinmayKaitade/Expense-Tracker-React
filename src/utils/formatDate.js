const formatDate = (date) => {
  // checking it must be a date object
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  let year = d.getFullYear();

  // checking it must be 2 digit
  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
};

export default formatDate;
