// update with UI with new entry
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.querySelector("#date").innerHTML = `Date: ${allData.newDate}`;
    document.querySelector("#temp").innerHTML = `Weather: ${allData.weather}°C`;
    document.querySelector(
      "#content"
    ).innerHTML = `Journal entry: ${allData.userFeel}`;
  } catch (error) {
    console.log("error in updateUI()", error);
  }
};

export { updateUI };
