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

// server-side GET route
app.get("/all", (req, res) => {
  res.send(projectData);
});

// server-side POST route
app.post("/add", (req, res) => {
  projectData = req.body;
});

// Set up node-fetch
const fetch = require("node-fetch");

const getGeonames = async () => {
  const geoUser = process.env.GEO_USER;
  let mode = "searchJSON?q=";
  let userInput = "london";
  let url = `http://api.geonames.org/${mode}${userInput}&username=${geoUser}`;
  let geoData = {};
  const req = await fetch(url);
  try {
    const data = await req.json();
    console.log(data);
    geoData.name = data.geonames[0].name;
    geoData.latitude = data.geonames[0].lat;
    geoData.longitude = data.geonames[0].lng;

    console.log(geoData);
    return geoData;
  } catch (error) {
    console.log("error in getWeather()", error);
  }
};
