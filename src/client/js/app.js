const handleSubmit = async (e) => {
  e.preventDefault;
  // const dotenv = require("dotenv");
  // dotenv.config();

  /* Global Variables */
  const apiUser = "loromi94";
  // const apiUser = process.env.API_USER;
  const country = "AT";

  let mode = "searchJSON?q=";
  let userInput = "";
  let url = `api.geonames.org/${mode}${userInput}&username=${apiUser}`;

  // weather: temperature in degree Celsius
  let weather = 0;

  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

  // get input when 'generate' Button is clicked
  // const generateBtn = document.querySelector("#generate");

  // listen for submission of user input

  // event.preventDefault();
  // store user input into variables
  // zip = document.querySelector("#zip").value;
  userInput = document.querySelector("#feelings").value;

  // create url depending on the location
  url = `api.geonames.org/${mode}${userInput}&username=${apiUser}`;

  getWeather()
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

  // main functions

  // POST fetched data to server-side endpoint
  const postWeatherData = async (url = ``, data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const fetchedData = await response.json();
      return fetchedData;
    } catch (error) {
      console.log("error", error);
    }
  };

  // Get weather from openweathermap api
  const getWeather = async () => {
    const req = await fetch(url);
    try {
      const data = await req.json();
      console.log(data);
      weather = data.main.temp;
      console.log(weather);
      return data;
    } catch (error) {
      console.log("error in getWeather()", error);
    }
  };

  // update with UI with new entry
  const updateUI = async () => {
    const request = await fetch("/all");
    try {
      const allData = await request.json();
      document.querySelector("#date").innerHTML = `Date: ${allData.newDate}`;
      document.querySelector(
        "#temp"
      ).innerHTML = `Weather: ${allData.weather}°C`;
      document.querySelector(
        "#content"
      ).innerHTML = `Journal entry: ${allData.userFeel}`;
    } catch (error) {
      console.log("error in updateUI()", error);
    }
  };
  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("submit", handleSubmit);
};

export { handleSubmit };
