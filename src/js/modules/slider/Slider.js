class Slider {
  constructor({
    containerSelector = null,
    slideSelector = null,
    nextSelector = null,
    prevSelector = null,
    clickToBeginSelector = null,
    activeClass = "",
  } = {}) {
    this.container = document.querySelector(containerSelector);

    this.slides = this.container.children;

    this.next = document.querySelectorAll(nextSelector);
    this.prev = document.querySelectorAll(prevSelector);
    this.beginizers = document.querySelectorAll(clickToBeginSelector);
    this.activeClass = activeClass;
    this.currentSlideNumber = 1;
  }
}

export default Slider;
