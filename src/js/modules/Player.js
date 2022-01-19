class Player {
  constructor(playerSelector, btnsSelector, overlaySelector) {
    this.playerSelector = playerSelector;
    this.player = null;
    this.btns = document.querySelectorAll(btnsSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.overlayClose = this.overlay.querySelector(".close");
  }

  handleBtns() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.overlay.style.display = "flex";
      });
    });
  }

  handleOverlay() {
    this.overlayClose.addEventListener("click", () => {
      this.closeOverlayAndPausePlayer(this.overlay, this.player);
    });
    this.overlay.addEventListener("click", (e) => {
      if (e.target && e.target === this.overlay) {
        this.closeOverlayAndPausePlayer(this.overlay, this.player);
      }
    });
  }

  closeOverlayAndPausePlayer(overlay, player) {
    if (player) {
      player.pauseVideo();
    }
    overlay.style.display = "none";
  }

  createPlayer(url) {
    this.player = new YT.Player(this.playerSelector, {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });
  }

  init() {
    if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubePlayerAPIReady = () => {
        this.createPlayer("vZ4Sne0wdxY");
      };
    }

    this.handleBtns();
    this.handleOverlay();
  }
}

export default Player;
