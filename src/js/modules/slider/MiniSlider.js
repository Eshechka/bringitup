import Slider from "./Slider";

class MniSlider extends Slider {
  constructor({
    containerSelector,
    slideSelector,
    nextSelector,
    prevSelector,
    activeClass,
  }) {
    super({
      containerSelector: containerSelector,
      slideSelector: slideSelector,
      nextSelector: nextSelector,
      prevSelector: prevSelector,
      activeClass: activeClass,
    });
  }

  showSlide(direction = null) {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
    });
    if (direction === "plus") {
      this.container.appendChild(this.slides[0]);
    } else if (direction === "minus") {
      this.container.insertBefore(
        this.slides[this.slides.length - 1],
        this.slides[0]
      );
    }
    this.slides[0].classList.add(this.activeClass);
  }

  changeSlide(howMuchSlidesPlus) {
    for (let j = 0; j < Math.abs(howMuchSlidesPlus); j++) {
      this.showSlide(howMuchSlidesPlus > 0 ? "plus" : "minus");
    }
  }

  init() {
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

    this.container.style.cssText = `
      display: flex;
      overflow: hidden; 
      align-items: flex-start`;

    this.slides.forEach((slide) => {
      slide.style.cssText = `
        flex-shrink: 0; `;
    });

    this.showSlide();
  }
}

export default MniSlider;
