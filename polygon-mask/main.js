if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("./worklet.js");
} else {
  const message = document.createElement("p");
  message.setAttribute("class", "not-supported");
  message.textContent = "The feature is not supported on your browser";
  
  document.querySelector("#masked").after(message);
}

CSS.registerProperty({
  name: "--polygon-sides",
  syntax: "<integer>",
  inherits: false,
  initialValue: 6,
});

CSS.registerProperty({
  name: "--polygon-rotate",
  syntax: "<angle>",
  inherits: false,
  initialValue: "0deg",
});

CSS.registerProperty({
  name: "--polygon-radius",
  syntax: "<percentage>",
  inherits: false,
  initialValue: "100%",
});

const el = document.querySelector("#masked");

/* sliders */
document.querySelector("#polygon-sides").addEventListener("input", event => {
  el.style.setProperty("--polygon-sides", event.target.value);
});

document.querySelector("#polygon-radius").addEventListener("input", event => {
  el.style.setProperty("--polygon-radius", `${event.target.value}%`);
});

document.querySelector("#polygon-rotate").addEventListener("input", event => {
  el.style.setProperty("--polygon-rotate", `${event.target.value}deg`);
});