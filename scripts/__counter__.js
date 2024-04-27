export default class Counter {
  container = document.createElement("div");
  flaps = [];
  /**
   * @param {HTMLElement | undefined} parentEle
   */
  constructor(initialValue = 3, rootClassName = "", parentEle) {
    this.parentEle = parentEle;
    this.value = initialValue;
    this.rootClassName = rootClassName;
    this.container.classList.add(this.#privateCreateClassName("counter"));
    this.container.setAttribute("data-value", this.value);

    const flapContainer = new FlapContainer(this.value);
    this.container.appendChild(flapContainer.ele);
  }

  decrease() {
    this.value--;
  }

  #privateCreateClassName(str = "") {
    if (!this.rootClassName) return str;
    return `${this.rootClassName}__${str}`;
  }
}

const FLAP_STATES = {
  open: "open",
  topClose: "topClose",
  bottomClose: "bottomClose",
};

class FlapContainer {
  currentState = FLAP_STATES.bottomClose;
  constructor(value = 0) {
    this.value = value;
    this.ele = document.createElement("div");
    this.ele.classList.add("flap__container");
    this.topFlap = this.#privateCreateFlapElement(value, "top");
    this.bottomFlap = this.#privateCreateFlapElement(value, "bottom");
    this.ele.appendChild(this.topFlap);
    this.ele.appendChild(this.bottomFlap);
  }

  /**
   *
   * @param {"open" | "topClose" | "bottomClose"} state
   */
  setState(state) {
    const states = Object.keys(FLAP_STATES);
    if (!states.includes(state)) {
      throw new Error(`Invalid state: ${state}`);
    }
  }

  #privateCreateClassName(str = "") {
    if (!this.rootClassName) return str;
    return `${this.rootClassName}__${str}`;
  }

  /**
   *
   * @param {number} value
   * @param {"top" | "bottom"} orientation
   */
  #privateCreateFlapElement(value = 0, orientation = "top") {
    const flap = document.createElement("div");
    flap.classList.add(this.#privateCreateClassName("flap"));
    flap.classList.add(this.#privateCreateClassName(`flap--${orientation}`));
    flap.innerHTML = `<span>${value}</span>`;
    return flap;
  }
}
