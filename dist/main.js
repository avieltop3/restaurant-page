(()=>{"use strict";function e(){document.querySelector("#content").innerHTML=""}function t(){e();const n=document.querySelector("#content");document.body.style.background="#7F9F80";let o=document.createElement("div");o.classList.add("infodiv");let c=document.createElement("h1");c.textContent="Welcome to the restaurant";let a=document.createElement("p");a.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",o.append(c),o.append(a),n.append(o),document.querySelector(".about").addEventListener("click",(t=>function(){e();const t=document.querySelector("#content"),n=document.createElement("h1");n.textContent="About Us";const o=document.createElement("p");o.textContent="We are the coolest",t.append(n),t.append(o)}())),document.querySelector(".home").addEventListener("click",(e=>t()))}console.log("lniked"),t()})();