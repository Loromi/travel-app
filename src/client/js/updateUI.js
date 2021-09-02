// update with UI with new entry
const updateUI = async (daysLeft, destination, startDate) => {
  // let daysLeft = "161";
  const request = await fetch("http://localhost:3000/data");
  try {
    document.querySelector("#picture").innerHTML = ``;
    document.querySelector(
      "#destination"
    ).innerHTML = `<span>${destination}</span>`;

    let ts = startDate;
    let date = new Date(ts);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    console.log(date, dd, mm, yy);
    document.querySelector(
      "#tripdate"
    ).innerHTML = `<span>${dd}.${mm}.${yy}</span>`;
    document.querySelector("#sunrise").innerHTML = ``;
    document.querySelector("#sunset").innerHTML = ``;
    document.querySelector("#temp").innerHTML = ``;
    document.querySelector("#summary").innerHTML = ``;
    document.querySelector(
      ".countdown"
    ).innerHTML = `<span class="days">${daysLeft}</span>
    <span class="timeRefDays">days</span>`;
  } catch (error) {
    console.log("error in updateUI()", error);
  }
};

export { updateUI };
