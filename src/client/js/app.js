import { updateUI } from "./updateUI.js";
import { getGeonames } from "./apiRequest.js";
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
  // zip = document.querySelector("#zip").value;
  userInput = document.querySelector("#feelings").value;

  // create url depending on the location
  url = `api.geonames.org/${mode}${userInput}&username=${apiUser}`;

  getGeonames()
    .then(() => {
      postWeatherData("/add", {
        newDate,
        userInput,
        weather,
      });
    })
    .then(() => {
      updateUI();
    });
};

// document.addEventListener("DOMContentLoaded", loadingComplete);
// function loadingComplete() {
//   const submitBtn = document.querySelector("#generate");
//   submitBtn.addEventListener("submit", handleSubmit);
// }

export { handleSubmit };
