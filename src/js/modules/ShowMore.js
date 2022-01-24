class ShowMore {
  constructor(btnPlusSelector) {
    try {
      this.btnsPlus = document.querySelectorAll(btnPlusSelector);
    } catch (err) {}
  }

  handleBtns() {
    this.btnsPlus.forEach((btn) => {
      btn.addEventListener("click", () => {
        const messageNode = btn
          .closest('[data-module-info="true"]')
          .querySelector(".msg");
        if (messageNode) {
          messageNode.classList.toggle("active");
        }
      });
    });
  }

  init() {
    try {
      this.handleBtns();
    } catch (err) {}
  }
}

export default ShowMore;
