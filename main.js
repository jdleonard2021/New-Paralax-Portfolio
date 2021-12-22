//Smooth Scroll//
const scroll = new SmoothScroll(' a[href*="#"]',{speed:800});
//sroll refresh at top//
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }