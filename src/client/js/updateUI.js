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

      return data;
    });

  try {
    document.querySelector(
      "#picture"
    ).innerHTML = `<img src="${response.imgURL.url}" alt="img destination">`;

    let destination = response.geoData.name;
    document.querySelector(
      "#tripdestination"
    ).innerHTML = `<span>Your Trip to: ${destination}</span>`;

    let ts = startDate;
    let date = new Date(ts);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    console.log(date, dd, mm, yy);
    document.querySelector(
      "#tripdate"
    ).innerHTML = `<span>${dd}.${mm}.${yy}</span>`;
    let sunrise = convertToTime(response.weatherData.msSunrise);
    let sunset = convertToTime(response.weatherData.msSunset);
    let temp = response.weatherData.temp;
    let summary = response.weatherData.description;
    document.querySelector("#sunrise").innerHTML = `<span>${sunrise}</span>`;
    document.querySelector("#sunset").innerHTML = `<span>${sunset}</span>`;
    document.querySelector("#temp").innerHTML = `<span>${temp} °C</span>`;
    document.querySelector("#summary").innerHTML = `<span>${summary}</span>`;
    document.querySelector(
      ".countdown"
    ).innerHTML = `<span class="days">${daysLeft}</span>
    <span class="timeRefDays">days</span>`;
  } catch (error) {
    console.log("error in updateUI()", error);
  }
};

export { updateUI };
