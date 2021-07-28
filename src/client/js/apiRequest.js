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
    return data;
  } catch (error) {
    console.log("error in getWeather()", error);
  }
};

export { getGeonames };
