class Slider {
  constructor(pageSelector, btnsSelector, clickToBeginSelector) {
    this.page = document.querySelector(pageSelector);
    this.slides = this.page.children;
    this.beginizers = document.querySelectorAll(clickToBeginSelector);
    this.btns = this.page.querySelectorAll(btnsSelector);
    this.currentSlideNumber = 1;
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
  }
  changeSlide(howMuchSlidesPlus) {
    this.currentSlideNumber = this.normaliseCurrentSlide(howMuchSlidesPlus);
    this.showSlide(this.currentSlideNumber);
  }
  render() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.changeSlide(1);
      });
    });
    this.showSlide(this.currentSlideNumber);
    this.toBegin();
  }
}

export default Slider;
