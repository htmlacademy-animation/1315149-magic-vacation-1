export default () => {
  const rulesItems = document.querySelectorAll(`.rules__item`);
  const rulesBtn = document.querySelector(`.rules__link`);

  const setActive = function (element) {
    element.classList.add(`active`);
  };

  const removeActive = function (element) {
    element.classList.remove(`active`);
  };

  document.body.addEventListener(`screenChanged`, (evt) => {
    if (evt.detail.screenName === `rules`) {
      rulesItems.forEach((rulesItem) => {
        setActive(rulesItem);
      });
    } else {
      rulesItems.forEach((rulesItem) => {
        removeActive(rulesItem);
      });

      removeActive(rulesBtn);
    }
  });

  rulesItems[rulesItems.length - 1].addEventListener(`animationend`, (evt) => {
    if (evt.animationName === `slideInRight`) {
      setActive(rulesBtn);
    }
  });
};
