// load environmental variables to the server
const dotenv = require("dotenv");
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require("express");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
const port = 3000;

const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// Set up node-fetch
const fetch = require("node-fetch");

const getGeonames = async (destination) => {
  const geoUser = process.env.GEO_USER;
  let mode = "searchJSON?q=";
  let url = `http://api.geonames.org/${mode}${destination}&username=${geoUser}`;
  let geoData = {};

  const fetchData = async (url) => {
    try {
      const req = await fetch(url);
      const data = await req.json();
      geoData.name = data.geonames[0].name;
      geoData.latitude = data.geonames[0].lat;
      geoData.longitude = data.geonames[0].lng;
      projectData.geoData = geoData;
      // console.log(geoData);
      return geoData;
    } catch (error) {
      console.log("error in getWeather()", error);
    }
  };
  return fetchData(url);
};

// Get name, latitude and longitude from weatherbit api
const getWeatherbit = async (coordinates, daysLeft) => {
  const apiKey = process.env.WEATHERBIT_KEY;
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${coordinates.latitude}&lon=${coordinates.longitude}&key=${apiKey}&days=${daysLeft}`;
  let weatherData = {};

  const fetchData = async (url) => {
    try {
      const req = await fetch(url);
      const data = await req.json();
      weatherData.temp = data.data[0].temp;
      weatherData.description = data.data[0].weather.description;
      weatherData.msSunrise = data.data[0].sunrise_ts;
      weatherData.msSunset = data.data[0].sunset_ts;
      projectData.weatherData = weatherData;
      // console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.log("error in getWeatherbit()", error);
    }
  };
  return fetchData(url);
};

// return pixabay image link
const getPixabay = async (destination) => {
  const pixabayKey = process.env.PIXABAY_KEY;
  const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${destination}&category=places`;
  console.log(url);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const imgURL = {
        url: json.hits[0].pageURL,
      };
      projectData.imgURL = imgURL;
    } catch (error) {
      console.log(error);
    }
  };
  console.log("getPixabay:", fetchData(url));
  return fetchData(url);
};

// server-side GET route
app.get("/data", (req, res) => {
  console.log("projectData:", projectData);
  res.send(projectData);
});

// server-side POST route
app.post("/data", async (req, res) => {
  const ret1 = await getGeonames(req.body.destination);
  const ret2 = await getWeatherbit(ret1, req.body.daysLeft);
  res.send(ret2);
});

// server-side GET route
app.get("/img", (req, res) => {
  console.log("projectData:", projectData);
  res.send(projectData);
});

// server-side POST route for images
app.post("/img", async (req, res) => {
  const image = await getPixabay(req.body.destination);
  res.send(image);
  console.log("img posted");
});

module.exports = app;
