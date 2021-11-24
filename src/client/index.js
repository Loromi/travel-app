import { clearStorage, handleSubmit, loadStorage } from "./js/app.js";
import { setDate } from "./js/setDate.js";
import "./styles/style.scss";
import "./styles/polaroid.scss";
import "./styles/input.scss";
import polaroidLogo from "./media/polaroid.png";
// import { storage } from "./js/storage";
import { updateUI } from "./js/updateUI.js";

document.addEventListener("DOMContentLoaded", loadingComplete);

function loadingComplete() {
  console.log("DOM loaded!");
  setDate();

  // storage.createStorage();
  // if (!storage.entries) {
  //   storage.createStorage();
  // }
  // else {
  //   const entries = JSON.parse(localStorage.getItem("entries"));
  //   entries.forEach((element) => updateUI(element));
  // }
  // const storedEntry = localStorage.getItem("entries");
  // if (storedEntry == null) {
  //   const entries = [];
  //   localStorage.setItem("entries", JSON.stringify(entries));
  // }

  // if (typeof localStorage === "undefined" || localStorage === null) {
  //   const LocalStorage = require("node-localstorage").LocalStorage;
  //   const localStorage = new LocalStorage("./scratch");
  // }

  const storage = localStorage.getItem(1);
  console.log(storage);

  loadStorage();

  const inputLogo = document.querySelector("#inputLogo");
  inputLogo.innerHTML = `<img src="${polaroidLogo}" alt="cam-logo.png" width="300" height="300"/>`;

  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("click", handleSubmit);

  const clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", clearStorage);
}

export { loadingComplete };
// export { handleSubmit };
