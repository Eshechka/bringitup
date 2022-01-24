class Download {
  constructor(btnsSelector) {
    try {
      this.btns = document.querySelectorAll(btnsSelector);
    } catch (err) {}
  }

  downloadFile(path, btn) {
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", path);
    downloadLink.setAttribute("download", path);
    downloadLink.style.display = "none";
    const parentBtn = btn.parentNode;
    parentBtn.insertBefore(downloadLink, btn);
    downloadLink.click();
    downloadLink.remove();
  }

  handleBtns() {
    this.btns.forEach((btn) => {
      const path = btn.dataset.path;
      if (path) {
        btn.addEventListener("click", () => this.downloadFile(path, btn));
      }
    });
  }

  init() {
    try {
      this.handleBtns();
    } catch (err) {}
  }
}

export default Download;
