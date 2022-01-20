import Player from "./modules/Player";
import BigSlider from "./modules/slider/BigSlider";
import MiniSlider from "./modules/slider/MiniSlider";

document.addEventListener("DOMContentLoaded", () => {
  const sliderMainPage = new BigSlider({
    containerSelector: ".page",
    nextSelector: ".next",
    clickToBeginSelector: '[data-link-logo="true"]',
  });
  sliderMainPage.init();

  const sliderMiniShowup = new MiniSlider({
    containerSelector: ".showup__content-slider",
    prevSelector: ".showup__prev",
    nextSelector: ".showup__next",
    activeClass: "card-active",
  });
  sliderMiniShowup.init();

  const sliderMiniModules = new MiniSlider({
    containerSelector: ".modules__content-slider",
    prevSelector: ".modules__info-btns .slick-prev",
    nextSelector: [".modules__info-btns .slick-next", ".card__controls-arrow"],
    activeClass: "card-active",
  });
  sliderMiniModules.init();

  const sliderMiniFeed = new MiniSlider({
    containerSelector: ".feed__slider",
    slideSelector: ".feed__item",
    prevSelector: ".feed .slick-prev",
    nextSelector: ".feed .slick-next",
    activeClass: "feed__item-active",
  });
  sliderMiniFeed.init();

  const player = new Player(
    "frame",
    '.showup [data-play-btn="true"]',
    ".overlay"
  );
  player.init();
});
