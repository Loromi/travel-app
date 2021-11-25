import { updateUI } from "./updateUI.js";
import { storage } from "./storage.js";

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
  // console.log(startDate, currentDate, daysLeft);

  const destination = document.querySelector("#destination").value;
  // console.log(destination);
  const data = {
    destination: destination,
    daysLeft: daysLeft,
    startDate: startDate,
  };

  const tripCount = localStorage.length + 1;
  storage.addEntry(tripCount, data);

  getWeather("http://localhost:3000/data", data)
    .then(
      getImg("http://localhost:3000/img", { destination: data.destination })
    )
    .then(() => {
      updateUI(daysLeft, startDate);
    });
};

const loadStorage = async () => {
  const storageSize = localStorage.length;
  if (storageSize >= 1) {
    for (let i = 1; i <= storageSize; i++) {
      const data = JSON.parse(localStorage.getItem(i));
      getWeather("http://localhost:3000/data", data)
        .then(
          getImg("http://localhost:3000/img", { destination: data.destination })
        )
        .then(() => {
          updateUI(data.daysLeft, data.startDate);
        });
    }
  }
};

const deleteEntry = (index) => {
  localStorage.removeItem(index);
};

const clearStorage = async (e) => {
  e.preventDefault;
  localStorage.clear();
};

export { handleSubmit, loadStorage, deleteEntry, clearStorage };
