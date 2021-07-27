/* Global Variables */
const apiKey = '9234d459d20111ad0d2e1adf31f6981d';
const country = 'AT';

let zip = '';
let userFeel = '';
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=metric&appid=${apiKey}`;

// weather: temperature in degree Celsius
let weather = 0;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// get input when 'generate' Button is clicked
const generateBtn = document.querySelector('#generate');

// listen for submission of user input
generateBtn.addEventListener('click', function() {
    
    // store user input into variables
    zip = document.querySelector('#zip').value;
    userFeel = document.querySelector('#feelings').value;

    // create url depending on the location
    url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=metric&appid=${apiKey}`;
    
    getWeather()
        .then(() => {
            postWeatherData('/add', {
                newDate,
                userFeel,
                weather
            });
        })
        .then(() => {
            updateUI()
        });
});

// main functions

// POST fetched data to server-side endpoint
const postWeatherData = async ( url = ``, data = {} )=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const fetchedData = await response.json();
        return fetchedData;
    }catch(error) {
    console.log("error", error);
    }
};

// Get weather from openweathermap api
const getWeather = async () => {
    const req = await fetch(url)    
    try {
        const data = await req.json();
        console.log(data);
        weather = data.main.temp;
        console.log(weather);
        return data;
        
    } catch(error) {
        console.log('error in getWeather()', error);
    }
};

// update with UI with new entry
const updateUI = async ()=> { 
    const request = await fetch ('/all');
    try {
        const allData = await request.json();
        document.querySelector('#date').innerHTML = `Date: ${allData.newDate}`;
        document.querySelector('#temp').innerHTML = `Weather: ${allData.weather}°C`;
        document.querySelector('#content').innerHTML = `Journal entry: ${allData.userFeel}`;
    } catch(error) {
        console.log('error in updateUI()', error);
    };
};
