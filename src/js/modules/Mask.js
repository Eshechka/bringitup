class Mask {
  constructor(selectorMask) {
    this.maskedNodes = document.querySelectorAll(selectorMask);
  }

  createMask(event) {
    const matrix = " (___) ___-____";
    const def = "+1";
    let keyPressed = "";

    const isSmthInInput = this.value.length > def.length;

    if (event.type === "blur" && !isSmthInInput) {
      this.value = "";
      return;
    } else if (event.type === "input") {
      keyPressed = event.data;
    }

    let val = isSmthInInput
      ? this.value.slice(0, def.length) === def
        ? this.value.slice(def.length).replace(/\D/g, "")
        : (keyPressed + this.value.slice(def.length + 1)).replace(/\D/g, "")
      : "";

    let i = 0;

    this.value =
      def +
      matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
  }

  init() {
    this.maskedNodes.forEach((node) => {
      node.addEventListener("input", this.createMask);
      node.addEventListener("focus", this.createMask);
      node.addEventListener("blur", this.createMask);
    });
  }
}

export default Mask;
