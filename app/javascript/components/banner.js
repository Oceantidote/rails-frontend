import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["CCCCCCCCXCX", "BBBBBBBBB", "AAAAAAAAAAAA", "Change your life", "Learn to code", "Become a coding god"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
