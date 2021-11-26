const setDate = () => {
  const inputDate = document.querySelector("#startDate");
  let d = new Date(); // Create a new date instance dynamically with JS

  // check month to use correct format: YYYY-MM-DD
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  if (month < 10 && day < 10) {
    let newDate = `${year}-0${month}-0${day}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
    inputDate.min = newDate;
    return newDate;
  } else if (month >= 10 && day < 10) {
    let newDate = `${year}-${month}-0${day}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
    inputDate.min = newDate;
    return newDate;
  } else if (month < 10 && day >= 10) {
    let newDate = `${year}-0${month}-${day}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
    inputDate.min = newDate;
    return newDate;
  } else {
    let newDate = `${year}-${month}-${day}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
    inputDate.min = newDate;
    return newDate;
  }
};

export { setDate };
