import { handleSubmit } from "./js/app.js";
import { setDate } from "./js/setDate.js";
import "./styles/style.scss";
import "./styles/polaroid.scss";

document.addEventListener("DOMContentLoaded", loadingComplete);

function loadingComplete() {
  console.log("DOM loaded!");
  setDate();
  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("click", handleSubmit);
}

export { loadingComplete };
// export { handleSubmit };
