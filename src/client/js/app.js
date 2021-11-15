import { updateUI } from "./updateUI.js";
import { storage } from "./storage.js";
import { getGeonames, getWeatherbit } from "./apiRequest.js";
import { postWeatherData } from "./postData.js";

/* Global Variables */

// Async POST request to get weather
const getWeather = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
// getWeather("http://localhost:3000/data", data);

// Async POST request to fetch image
const getImg = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

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

  const destination = document.querySelector("#destination").value;
  console.log(destination);
  const data = {
    destination: destination,
    daysLeft: daysLeft,
  };
  // const entries = [];
  // storage.addEntry(data);
  // if (!storage) {
  //   const entries = [];
  //   return entries;
  // } else {
  //   const entries = JSON.parse(localStorage.getItem("entries"));
  //   return entries;
  // }
  // entries.push(data);
  // localStorage.setItem("entries", JSON.stringify(entries));
  getWeather("http://localhost:3000/data", data)
    .then(
      getImg("http://localhost:3000/img", { destination: data.destination })
    )
    .then(() => {
      updateUI(daysLeft, startDate);
    });
};

// const storedData = storage.getStoredData();
// if (storedData) {
//   handleSubmit();
// } else {
//   storage.createStorage();
// }

// document.addEventListener("DOMContentLoaded", loadingComplete);
// function loadingComplete() {
//   const submitBtn = document.querySelector("#generate");
//   submitBtn.addEventListener("submit", handleSubmit);
// }

export { handleSubmit };
