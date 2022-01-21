class Difference {
  constructor(containerSelector, itemSelector, btnPlusSelector) {
    this.container = document.querySelector(containerSelector);
    this.items = this.container.querySelectorAll(itemSelector);
    this.controlItem = this.container.querySelector(
      '[data-control-item="true"]'
    );
    this.plus = this.container.querySelector(btnPlusSelector);
    this.visibleItems = 0;
  }

  hideItems() {
    this.items.forEach((item) => {
      if (item !== this.controlItem) {
        item.style.display = "none";
      }
    });
    this.visibleItems = 0;
  }

  showNextItem() {
    if (this.visibleItems < this.items.length - 1) {
      this.items[this.visibleItems].style.display = "flex";
      this.visibleItems += 1;
    }
    if (this.visibleItems === this.items.length - 1) {
      this.controlItem.remove();
    }
  }

  init() {
    this.hideItems();

    this.plus.addEventListener("click", () => this.showNextItem());
  }
}

export default Difference;
