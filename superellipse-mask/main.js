if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("./worklet.js");
} else {
  const message = document.createElement("p");
  message.setAttribute("class", "not-supported");
  message.textContent = "The feature is not supported on your browser";
  
  document.querySelector("#masked").after(message);
}

CSS.registerProperty({
  name: "--superellipse-n",
  syntax: "<number>",
  inherits: false,
  initialValue: 2,
});

CSS.registerProperty({
  name: "--superellipse-radius-x",
  syntax: "<percentage>",
  inherits: false,
  initialValue: "100%",
});

CSS.registerProperty({
  name: "--superellipse-radius-y",
  syntax: "<percentage>",
  inherits: false,
  initialValue: "100%",
});

CSS.registerProperty({
  name: "--superellipse-rotate",
  syntax: "<angle>",
  inherits: false,
  initialValue: "0deg",
});

CSS.registerProperty({
  name: "--superellipse-step",
  syntax: "<number>",
  inherits: false,
  initialValue: "0.1",
});

const el = document.querySelector("#masked");

/* sliders */
document.querySelector("#superellipse-n").addEventListener("input", event => {
  el.style.setProperty("--superellipse-n", event.target.value);
});

document.querySelector("#superellipse-radius-x").addEventListener("input", event => {
  el.style.setProperty("--superellipse-radius-x", `${event.target.value}%`);
});

document.querySelector("#superellipse-radius-y").addEventListener("input", event => {
  el.style.setProperty("--superellipse-radius-y", `${event.target.value}%`);
});

document.querySelector("#superellipse-rotate").addEventListener("input", event => {
  el.style.setProperty("--superellipse-rotate", `${event.target.value}deg`);
});

document.querySelector("#superellipse-step").addEventListener("input", event => {
  el.style.setProperty("--superellipse-step", `${event.target.value}`);
});