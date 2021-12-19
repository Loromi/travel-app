import { clearStorage, handleSubmit, loadStorage } from "./js/app.js";
import { setDate } from "./js/setDate.js";
import "./styles/style.scss";
import "./styles/polaroid.scss";
import "./styles/input.scss";
import polaroidLogo from "./media/polaroid.png";

document.addEventListener("DOMContentLoaded", loadingComplete);

function loadingComplete() {
  console.log("DOM loaded!");
  setDate();

  // const storage = localStorage.getItem(1);
  // console.log("localStorage: ", storage);

  loadStorage();

  const inputLogo = document.querySelector("#inputLogo");
  inputLogo.innerHTML = `<img src="${polaroidLogo}" alt="cam-logo.png" width="300" height="300"/>`;

  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("click", handleSubmit);

  const clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", clearStorage);
}

export { loadingComplete };
