// check date to use correct format: YYYY-MM-DD
const checkFormat = (year, month, day) => {
  if (month < 10 && day < 10) {
    let newDate = `${year}-0${month}-0${day}`;
    return newDate;
  } else if (month >= 10 && day < 10) {
    let newDate = `${year}-${month}-0${day}`;
    return newDate;
  } else if (month < 10 && day >= 10) {
    let newDate = `${year}-0${month}-${day}`;
    return newDate;
  } else {
    let newDate = `${year}-${month}-${day}`;
    return newDate;
  }
};

const setDate = () => {
  const inputDate = document.querySelector("#startDate");
  let d = new Date(); // Create a new date instance dynamically with JS

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  let newDate = checkFormat(year, month, day);
  inputDate.value = newDate; // Set value of the date input to the generated date
  inputDate.min = newDate;
};

export { setDate, checkFormat };
