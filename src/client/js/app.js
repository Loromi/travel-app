import { updateUI } from "./updateUI.js";
import { getGeonames, getWeatherbit } from "./apiRequest.js";
import { postWeatherData } from "./postData.js";

const handleSubmit = async (e) => {
  e.preventDefault;
  // const dotenv = require("dotenv");
  // dotenv.config();

  /* Global Variables */
  const apiUser = "loromi94";
  // // const apiUser = process.env.API_USER;
  // const country = "AT";

  let mode = "searchJSON?q=";
  let userInput = "";
  let url = `api.geonames.org/${mode}${userInput}&username=${apiUser}`;

  // weather: temperature in degree Celsius
  let weather = 0;

  // get input when 'generate' Button is clicked
  // const generateBtn = document.querySelector("#generate");

  // listen for submission of user input

  // event.preventDefault();
  // store user input into variables

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

  userInput = document.querySelector("#feelings").value;

  // create url depending on the location
  url = `api.geonames.org/${mode}${userInput}&username=${apiUser}`;

  // getGeonames()
  //   .then(() => {
  //     postWeatherData("/add", {
  //       newDate,
  //       userInput,
  //       weather,
  //     });
  //   })
  //   .then(() => {
  //     updateUI();
  //   });
  getGeonames()
    .then(() => {
      getWeatherbit();
    })
    .then(() => {
      updateUI(daysLeft);
    });
};

// document.addEventListener("DOMContentLoaded", loadingComplete);
// function loadingComplete() {
//   const submitBtn = document.querySelector("#generate");
//   submitBtn.addEventListener("submit", handleSubmit);
// }

export { handleSubmit };
