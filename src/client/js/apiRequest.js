// Get name, latitude and longitude from geonames api
const getGeonames = async () => {
  const apiUser = "loromi94";
  let mode = "searchJSON?q=";
  let userInput = "london";
  let url = `http://api.geonames.org/${mode}${userInput}&username=${apiUser}`;
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
    console.log("error in getGeonames()", error);
  }
};

// Get name, latitude and longitude from geonames api
const getWeatherbit = async () => {
  const apiKey = "5d7a729b05cb4984b1917ce1c20941bb";
  // let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${geoData.latitude}&lon=${geoData.longitude}&key=${apiKey}`;
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=51.508&lon=0.125&key=${apiKey}`;
  let weatherData = {};
  const req = await fetch(url);
  try {
    const data = await req.json();
    weatherData.temp = data.data[0].temp;
    weatherData.description = data.data[0].weather.description;
    weatherData.msSunrise = data.data[0].sunrise_ts;
    weatherData.msSunset = data.data[0].sunset_ts;
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log("error in getWeatherbit()", error);
  }
};

export { getGeonames, getWeatherbit };
