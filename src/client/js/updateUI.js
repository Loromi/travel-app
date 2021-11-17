import { storage } from "./storage";
import { convertToTime } from "./convertUnix";

// update with UI with new entry
const updateUI = async (daysLeft, startDate) => {
  // let daysLeft = "161";
  const response = await fetch("http://localhost:3000/data")
    .then(function (response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    })
    .then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log("updateUI: ", data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      const storedData = storage.getStoredData();
      console.log("storedData: ", storedData);
      if (storedData == null || storedData == undefined) {
        storage.createStorage();
        storage.addEntry(data);
      } else {
        storage.addEntry(data);
      }
      return data;
    });

  try {
    const tripHolder = document.createElement("section");
    tripHolder.classList = "trip item";
    tripHolder.innerHTML = `<div class="picture"></div>
    <div class="holder city">
      <h3 class="tripdestination"></h3>
      <h3 class="tripdate"></h3>
      <div class="countdown">
        <span class="days">00</span>
        <span class="timeRefDays">days</span>
      </div>
    </div>
    <div class="holder weather weather-container">
      <h3>weather forecast for your trip:</h3>
      <div class="weatherHolder">
        <div class="weather sunrise"></div>
        <div class="weather sunset"></div>
        <div class="weather temp"></div>
        <div class="weather summary"></div>
      </div>
    </div>`;
    document.querySelector("#sectionHolder").prepend(tripHolder);

    document.querySelector(
      ".picture"
    ).innerHTML = `<img src="${response.imgURL.url}" alt="img destination">`;

    let destination = response.geoData.name;
    document.querySelector(
      ".tripdestination"
    ).innerHTML = `<span>Your Trip to: ${destination}</span>`;

    let ts = startDate;
    let date = new Date(ts);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    console.log(date, dd, mm, yy);
    document.querySelector(
      ".tripdate"
    ).innerHTML = `<span>${dd}.${mm}.${yy}</span>`;
    let sunriseHours = convertToTime(response.weatherData.msSunrise).hours;
    let sunriseMinutes = convertToTime(response.weatherData.msSunrise).minutes;
    let sunsetHours = convertToTime(response.weatherData.msSunset).hours;
    let sunsetMinutes = convertToTime(response.weatherData.msSunset).minutes;
    let temp = response.weatherData.temp;
    let summary = response.weatherData.description;
    document.querySelector(
      ".sunrise"
    ).innerHTML = `<span>Sunrise: ${sunriseHours}:${sunriseMinutes}</span>`;
    document.querySelector(
      ".sunset"
    ).innerHTML = `<span>Sunset:  ${sunsetHours}:${sunsetMinutes}</span>`;
    document.querySelector(".temp").innerHTML = `<span>${temp} °C</span>`;
    document.querySelector(".summary").innerHTML = `<span>${summary}</span>`;
    document.querySelector(
      ".countdown"
    ).innerHTML = `<span class="days">${daysLeft}</span>
    <span class="timeRefDays">days</span>`;
  } catch (error) {
    console.log("error in updateUI()", error);
  }
};

export { updateUI };
