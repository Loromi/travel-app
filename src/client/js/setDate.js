const setDate = () => {
  const inputDate = document.querySelector("#startDate");
  let d = new Date(); // Create a new date instance dynamically with JS
  // check month to use correct format: YYYY-MM-DD
  let month = d.getMonth() + 1;
  if (month < 10) {
    let newDate = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
  } else {
    let newDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    inputDate.value = newDate; // Set value of the date input to the generated date
  }
};

export { setDate };
