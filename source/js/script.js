// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import pageLoad from './modules/page-load';
import rules from './modules/rules';
import AccentTypographyBuild from './modules/accent-typography';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
pageLoad();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const accentTypographyIntroTitle = new AccentTypographyBuild(`.intro__title`, {animationDelay: 500});
const accentTypographyIntroDate = new AccentTypographyBuild(`.intro__date`, {animationDelay: 1000});


setTimeout(() => {
  accentTypographyIntroTitle.runAnimation();
  accentTypographyIntroDate.runAnimation();
}, 500);

document.body.addEventListener(`screenChanged`, (evt) => {
  if (evt.detail.screenName === `top`) {
    accentTypographyIntroTitle.runAnimation();
    accentTypographyIntroDate.runAnimation();
  } else {
    setTimeout(() => {
      accentTypographyIntroTitle.destroyAnimation();
      accentTypographyIntroDate.destroyAnimation();
    }, evt.detail.screenName === `prizes` ? 1000 : 0);
  }
});
