import { handleSubmit } from "./js/app.js";
import { setDate } from "./js/setDate.js";
import "./styles/style.scss";
import "./styles/polaroid.scss";
import "./styles/input.scss";
import polaroidLogo from "./media/polaroid.png";
import { storage } from "./js/storage";
import { updateUI } from "./js/updateUI.js";

document.addEventListener("DOMContentLoaded", loadingComplete);

function loadingComplete() {
  console.log("DOM loaded!");
  setDate();

  // storage.createStorage();
  if (!storage) {
    storage.createStorage();
  } else {
    const entries = JSON.parse(localStorage.getItem("entries"));
    entries.forEach((element) => updateUI(element));
  }

  const inputLogo = document.querySelector("#inputLogo");
  inputLogo.innerHTML = `<img src="${polaroidLogo}" alt="cam-logo.png" width="300" height="300"/>`;

  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("click", handleSubmit);

  const clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", localStorage.clear());
}

export { loadingComplete };
// export { handleSubmit };
