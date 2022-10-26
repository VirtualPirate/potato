const leftSlideContents = document.querySelectorAll(".left-slide-anim");
const leftAnimObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("left-slide-show", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
leftSlideContents.forEach((content) => leftAnimObserver.observe(content));

const rightSlideContents = document.querySelectorAll(".right-slide-anim");
const rightAnimObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("right-slide-show", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
rightSlideContents.forEach((content) => rightAnimObserver.observe(content));

const topSlideContents = document.querySelectorAll(".top-slide-anim");
const topAnimObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slide-show", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
topSlideContents.forEach((content) => topAnimObserver.observe(content));

const bottomSlideContents = document.querySelectorAll(".bottom-slide-anim");
const bottomAnimObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slide-show", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
bottomSlideContents.forEach((content) => bottomAnimObserver.observe(content));
