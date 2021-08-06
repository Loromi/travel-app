import { updateUI } from "./updateUI.js";
import { getGeonames, getWeatherbit } from "./apiRequest.js";
import { postWeatherData } from "./postData.js";

/* Global Variables */

const handleSubmit = async (e) => {
  e.preventDefault;

  /**
   * calculate the days left until the trip is supposed to start
   * @var startDate start date of the trip as JS timestamp in ms
   * @var currentDate current date from the user's system as JS timestamp in ms
   * @var msPerDay milliseconds per Day
   * @var daysLeft days until the trip starts
   */
  const startDate = document.querySelector("#startDate").valueAsNumber;
  const currentDate = new Date().getTime();
  let msPerDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.floor((startDate - currentDate) / msPerDay);
  console.log(startDate, currentDate, daysLeft);

  postWeatherData("http://localhost:3000/data", data).then(() => {
    updateUI();
  });
};

// document.addEventListener("DOMContentLoaded", loadingComplete);
// function loadingComplete() {
//   const submitBtn = document.querySelector("#generate");
//   submitBtn.addEventListener("submit", handleSubmit);
// }

export { handleSubmit };
