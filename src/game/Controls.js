class Controls {
  constructor() {
    this.#init();
  }

  #init() {
    this.keys = {
      left: false,
      right: false,
    };

    document.addEventListener("keydown", (event) => this.#onKeyDown(event), false);
    document.addEventListener("keyup", (event) => this.#onKeyUp(event), false);
  }

  #onKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        this.keys.left = true;
        break;
      case "ArrowRight":
        this.keys.right = true;
        break;
    }
  }

  #onKeyUp(event) {
    switch (event.key) {
      case "ArrowLeft":
        this.keys.left = false;
        break;
      case "ArrowRight":
        this.keys.right = false;
        break;
    }
  }
}

export default Controls;
