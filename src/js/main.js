import Slider from "./modules/Slider";

document.addEventListener("DOMContentLoaded", () => {
  console.log("LOADED");

  const slider = new Slider(".page", ".next", '[data-link-logo="true"]');
  slider.render();
});
