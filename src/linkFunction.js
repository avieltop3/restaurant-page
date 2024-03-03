import { about } from "./about";
import { renderPage } from "./renderpage";

function linkFunction() {
  const aboutButton = document.querySelector(".about");

  aboutButton.addEventListener("click", (e) => about());

  const homeButton = document.querySelector(".home");

  homeButton.addEventListener("click", (e) => renderPage());
}

export { linkFunction };
