import { clearContent } from "./clearContent";

function about() {
  clearContent();

  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");

  h1.textContent = "About Us";

  const p = document.createElement("p");

  p.textContent = "We are the coolest";

  content.append(h1);
  content.append(p);
}

export { about };
