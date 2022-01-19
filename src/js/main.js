import Player from "./modules/Player";
import Slider from "./modules/Slider";

document.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".page", ".next", '[data-link-logo="true"]');
  slider.render();

  const player = new Player(
    "frame",
    '.showup [data-play-btn="true"]',
    ".overlay"
  );
  player.init();
});
