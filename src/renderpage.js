import { clearContent } from "./clearContent";
import { linkFunction } from "./linkFunction";

function renderPage() {
  clearContent();
  const contentDiv = document.querySelector("#content");
  document.body.style.background = "#7F9F80";
  let infoDiv = document.createElement("div");

  infoDiv.classList.add("infodiv");

  let welcome = document.createElement("h1");

  welcome.textContent = "Welcome to the restaurant";

  let info = document.createElement("p");

  info.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

  infoDiv.append(welcome);
  infoDiv.append(info);

  contentDiv.append(infoDiv);

  linkFunction();
}

export { renderPage };
