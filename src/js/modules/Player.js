class Player {
  constructor(playerSelector, btnsSelector, overlaySelector) {
    try {
      this.playerSelector = playerSelector;
      this.player = null;
      this.btns = document.querySelectorAll(btnsSelector);
      this.activeBtn = null;
      this.overlay = document.querySelector(overlaySelector);
      this.overlayClose = this.overlay.querySelector(".close");
    } catch (err) {}
  }

  handleBtns(btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.activeBtn = btn;
        const url = btn.dataset.url || "";

        if (this.player && url) {
          this.player.loadVideoById(`${url}`);
          this.overlay.style.display = "flex";
        }
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
      events: {
        onReady: () => this.onPlayerReady(),
        onStateChange: (state) => this.onPlayerStateChange(state),
      },
    });
  }

  onPlayerReady() {
    this.handleBtns(this.btns);
    this.handleOverlay();
  }

  onPlayerStateChange(state) {
    if (state.data === 0 && this.activeBtn) {
      const blockedVideoNode = this.activeBtn
        .closest(".module__video")
        .querySelector(".module__video-item[data-module-video-item='true']");

      blockedVideoNode.style.cssText = `
        filter: none;
        opacity: 0.9;
        `;

      const playBtn = this.activeBtn.cloneNode(true);
      const dataPlayBtn = blockedVideoNode.querySelector(
        '[data-play-btn-blocked="true"]'
      );
      const dataPlayBtnUrl = dataPlayBtn.dataset.url;

      playBtn.setAttribute("data-url", dataPlayBtnUrl);
      blockedVideoNode.insertBefore(playBtn, dataPlayBtn);
      dataPlayBtn.remove();

      this.handleBtns([playBtn]);
    }
  }

  init() {
    try {
      if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        const url = this.btns[0].dataset.url || "";

        window.onYouTubePlayerAPIReady = () => {
          this.createPlayer(url);
        };
      }
    } catch (err) {}
  }
}

export default Player;
