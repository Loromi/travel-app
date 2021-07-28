import { handleSubmit } from "./js/app.js";
import "./styles/style.scss";

document.addEventListener("DOMContentLoaded", loadingComplete);
function loadingComplete() {
  console.log("DOM loaded!");
  const submitBtn = document.querySelector("#generate");
  submitBtn.addEventListener("click", handleSubmit);
}

export { loadingComplete };
// export { handleSubmit };
