class NoRussianSigns {
  constructor(selector) {
    this.rusificateNodes = document.querySelectorAll(selector);
  }

  init() {
    this.rusificateNodes.forEach((node) => {
      node.addEventListener("input", () => {
        node.value = node.value.replace(/[А-я]/, "");
      });
    });
  }
}

export default NoRussianSigns;
