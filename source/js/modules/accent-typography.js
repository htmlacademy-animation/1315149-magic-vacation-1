export default class AccentTypographyBuild {
  constructor(
      elementSelector,
      {
        animationProperty = `transform`,
        animationDuration = 500,
        animationTimingFunction = `ease-out`,
        animationDelay = 0,
        animationOffset = 30,
      } = {},
      activeClass = `active`,
  ) {
    this._elementSelector = elementSelector;
    this._activeClass = activeClass;

    this._animationProperty = animationProperty;
    this._animationDuration = animationDuration;
    this._animationTimingFunction = animationTimingFunction;
    this._animationDelay = animationDelay;
    this._animationOffset = animationOffset;

    this._element = document.querySelector(this._elementSelector);

    this.prepareText();
  }

  init() {}

  createAnimatedElement(element, idx) {
    const elementContainer = document.createElement(`span`);
    elementContainer.textContent = element;
    elementContainer.style.transition = `${this._animationProperty} ${this._animationDuration}ms ${this._animationTimingFunction} ${this._animationDelay}ms`;

    if (idx === 3) {
      this._animationDelay += this._animationOffset * 2;
    } else if (idx === 2) {
      this._animationDelay -= this._animationOffset;
    } else {
      this._animationDelay += this._animationOffset * 2;
    }

    return elementContainer;
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(`accent__typography`);

    const words = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = words.reduce((fragmentParent, word, idz) => {
      let idx = 1;

      const letters = [...word];

      const wordElement = letters.reduce((fragment, letter, idy) => {
        fragment.append(this.createAnimatedElement(letter, idx));

        idx = idx === 3 ? 1 : idx + 1;

        if (idz !== words.length - 1 && idy === letters.length - 1) {
          const space = document.createElement(`span`);
          space.classList.add(`accent__typography-space`);
          space.innerHTML = `&nbsp;`;
          fragment.append(space);
        }

        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(`accent__typography-word`);
      wordContainer.append(wordElement);
      fragmentParent.append(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.append(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(this._activeClass);
  }

  destroyAnimation() {
    if (!this._element) {
      return;
    }

    this._element.classList.remove(this._activeClass);
  }
}

