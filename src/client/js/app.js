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

const handleSubmit = async (e) => {
  e.preventDefault;

  /**
   * check length of local Storage and set variable for new storage iteration
   * @var tripCount numeric Value of current user input Set
   */
  const tripCount = localStorage.length + 1;

  /**
   * calculate the days left until the trip is supposed to start
   * @var startDate start date of the trip as JS timestamp in ms
   * @var currentDate current date from the user's system as JS timestamp in ms
   * @var msPerDay milliseconds per Day
   * @var daysLeft days until the trip starts
   */
  var { daysLeft, startDate } = setUserDate();

  const destination = document.querySelector("#destination").value;

  const data = {
    destination: destination,
    daysLeft: daysLeft,
    startDate: startDate,
  };
  console.log(`data: ${JSON.stringify(data)}}`);

  storage.addEntry(tripCount, data);
  console.log(JSON.stringify(storage.getStoredData(`${tripCount}`)));

  getWeather("http://localhost:3000/data", data).then(() => {
    updateUI(daysLeft, startDate, destination);
  });
};

const loadStorage = async () => {
  const storageSize = localStorage.length;
  if (storageSize >= 1) {
    for (let i = 1; i <= storageSize; i++) {
      const storedData = JSON.parse(localStorage.getItem(`${i}`));
      console.log(`storedData: {${i}: ${JSON.stringify(storedData)}}`);
      getWeather("http://localhost:3000/data", storedData).then(() => {
        updateUI(
          storedData.daysLeft,
          storedData.startDate,
          storedData.destination
        );
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
function setUserDate() {
  const startDate = document.querySelector("#startDate").valueAsNumber;
  const currentDate = new Date().getTime();
  let msPerDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.floor((startDate - currentDate) / msPerDay);
  return { daysLeft, startDate };
}
