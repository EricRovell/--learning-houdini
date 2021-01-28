import { customProps } from "./customProperties.js";

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("./worklet.js");
} else {
  document.querySelector("html").classList.add("paint-api-no-support");
}

for (let prop of customProps) {
  CSS.registerProperty(prop);
}

const button = document.querySelector(".ripple");

let start;

button.addEventListener("click", (ev) => {
  button.classList.add("animating");
  const [x, y] = [ev.offsetX, ev.offsetY];
  start = performance.now();
  const anim = (now) => {
    const count = Math.floor(now - start);
    button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
    if (1000 < count) {
      button.classList.remove("animating");
      button.style.cssText = `--animation-tick: 0`;
      return;
    }
    requestAnimationFrame(anim);
  };
  requestAnimationFrame(anim);
});