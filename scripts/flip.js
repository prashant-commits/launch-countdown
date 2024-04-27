export default class Flip {
    flip = document.createElement("div");
    flipTopBack = document.createElement("div");
    flipBottomBack = document.createElement("div");
    flipTopFront = document.createElement("div");
    flipBottomFront = document.createElement("div");

  /**
   *
   * @param {number} initialValue
   * @param {HTMLElement} parentEle
   * @param {(number) => number} nextValueCallback
   */
  constructor(initialValue = 9, parentEle, nextValueCallback) {
    this.value = initialValue;
    this.parentEle = parentEle;

    this.nextValueCallback = nextValueCallback;
    this.flipItems = this.#privateInitFlipItems();
    this.flipItems.forEach((item) => this.flip.appendChild(item));

    this.parentEle.appendChild(this.flip);
  }

  #privateInitFlipItems() {
    this.flip.classList.add("flip");

    this.flipTopBack.classList.add("flip-top-back", "flip-item", "flip-top");

    this.flipBottomBack.classList.add(
      "flip-bottom-back",
      "flip-item",
      "flip-bottom"
    );

    this.flipTopFront.classList.add("flip-top-front", "flip-item", "flip-top");

    this.flipBottomFront.classList.add(
      "flip-bottom-front",
      "flip-item",
      "flip-bottom"
    );

    this.flipTopFront.textContent = this.value;
    this.flipBottomFront.textContent = this.value;
    this.flipTopBack.textContent = this.nextValueCallback(this.value);
    this.flipBottomBack.textContent = this.nextValueCallback(this.value);

    this.flipTopFront.addEventListener("animationend", this.#privateTopFrontAnimationEndCallback.bind(this));
    this.flipBottomBack.addEventListener("animationend", this.#privateBottomBackAnimationEndCallback.bind(this));

    return [this.flipTopBack, this.flipBottomBack, this.flipTopFront, this.flipBottomFront];
  }

  #privateTopFrontAnimationEndCallback() {
    this.flipTopFront.textContent = this.value;
    this.flipTopBack.textContent = this.nextValueCallback(this.value);
  }

  #privateBottomBackAnimationEndCallback() {
    this.flipBottomBack.textContent = this.nextValueCallback(this.value);
    this.flipBottomFront.textContent = this.value;
    this.flipTopFront.classList.remove("animate-top-front");
    this.flipBottomBack.classList.remove("animate-bottom-back");
  }

    /**
     *
     * @param {number} value
     */
    setValue(value) {
        if(value === this.value) return;
        this.value = value;
        this.flipTopFront.classList.add("animate-top-front");
        this.flipBottomBack.classList.add("animate-bottom-back");
    }
}
