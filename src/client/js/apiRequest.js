// Get weather from openweathermap api
const getWeather = async () => {
  const apiUser = "loromi94";
  let mode = "searchJSON?q=";
  let userInput = "london";
  let url = `http://api.geonames.org/${mode}${userInput}&username=${apiUser}`;
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

export { getWeather };
