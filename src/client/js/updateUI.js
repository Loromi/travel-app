// update with UI with new entry
const updateUI = async (daysLeft) => {
  // let daysLeft = "161";
  const request = await fetch("http://localhost:3000/data");
  try {
    // const allData = await request.json();
    // document.querySelector("#date").innerHTML = `Date: ${allData.newDate}`;
    // document.querySelector("#temp").innerHTML = `Weather: ${allData.weather}°C`;
    // document.querySelector(
    //   "#content"
    // ).innerHTML = `Journal entry: ${allData.userFeel}`;

    document.querySelector(
      ".countdown"
    ).innerHTML = `<span class="days">${daysLeft}</span>
    <span class="timeRefDays">days</span>`;
  } catch (error) {
    console.log("error in updateUI()", error);
  }
};

export { updateUI };
