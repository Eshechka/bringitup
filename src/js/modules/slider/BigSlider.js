import Slider from "./Slider";

class BigSlider extends Slider {
  constructor({
    containerSelector,
    nextSelector,
    prevSelector,
    clickToBeginSelector,
  }) {
    super({
      containerSelector: containerSelector,
      nextSelector: nextSelector,
      prevSelector: prevSelector,
      clickToBeginSelector: clickToBeginSelector,
    });
  }

  toBegin() {
    this.beginizers.forEach((beginizer) => {
      beginizer.addEventListener("click", () => {
        this.currentSlideNumber = 1;
        this.showSlide(this.currentSlideNumber);
      });
    });
  }

  normaliseCurrentSlide(plus) {
    const remain = plus % this.slides.length;
    if (this.currentSlideNumber + remain < 1) {
      return this.slides.length + this.currentSlideNumber + remain;
    } else if (this.currentSlideNumber + remain > this.slides.length) {
      return this.currentSlideNumber + remain - this.slides.length;
    }
    return this.currentSlideNumber + remain;
  }

  showSlide(slideNum) {
    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });
    this.slides[slideNum - 1].style.display = "block";

    try {
      if (this.slides[slideNum - 1] === this.slideHanson) {
        this.hansonTimeout = setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else if (this.hansonTimeout) {
        clearTimeout(this.hansonTimeout);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  changeSlide(howMuchSlidesPlus) {
    this.currentSlideNumber = this.normaliseCurrentSlide(howMuchSlidesPlus);
    this.showSlide(this.currentSlideNumber);
  }

  init() {
    try {
      this.next.forEach((nextBtn) => {
        nextBtn.addEventListener("click", (e) => {
          e.preventDefault();
          this.changeSlide(1);
        });
      });
      this.prev.forEach((prevBtn) => {
        prevBtn.addEventListener("click", (e) => {
          e.preventDefault();
          this.changeSlide(-1);
        });
      });

      this.showSlide(this.currentSlideNumber);
      this.toBegin();

      try {
        this.hanson = this.container.querySelector("[data-hanson='true']");
        this.slideHanson = this.container.querySelector(
          "[data-hanson-parent='true']"
        );
        this.hansonTimeout = null;
        this.hanson.style.opacity = "0";
        this.hanson.classList.add("animated");
      } catch (err) {}
    } catch (err) {}
  }
}

export default BigSlider;
