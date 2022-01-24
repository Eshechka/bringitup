import Difference from "./modules/Difference";
import Download from "./modules/Download";
import Form from "./modules/Form";
import Mask from "./modules/Mask";
import NoRussianSigns from "./modules/NoRussianSigns";
import Player from "./modules/Player";
import ShowMore from "./modules/ShowMore";
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

  const sliderModulesAside = new BigSlider({
    containerSelector: ".moduleapp",
    nextSelector: [".sidecontrol .next", ".module__wrapper .nextmodule"],
    prevSelector: ".module__wrapper .prevmodule",
    clickToBeginSelector: '[data-link-logo="true"]',
  });
  sliderModulesAside.init();

  new Player("frame", '.showup [data-play-btn="true"]', ".overlay").init();
  new Player(
    "frame",
    '.module__video [data-play-btn="true"]',
    ".overlay"
  ).init();

  new Difference(".officerold", ".officer__card-item", ".plus").init();
  new Difference(".officernew", ".officer__card-item", ".plus").init();

  new Form(".form").init();

  new Mask("#phone").init();

  new NoRussianSigns('[name="email"]').init();

  new ShowMore(".module__info .plus").init();

  new Download(".module__info-book .download").init();
});
