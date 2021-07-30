const setDate = () => {
  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  // Set value of the date input to the generated date
  const inputDate = document.querySelector("#startDate");
  inputDate.value = newDate;
};

export { setDate };
