const responsiveSvg = document.querySelector(".speciality-section-svg");
const IntersectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animated");
    });
  },
  { threshold: 0.5 }
);
IntersectObserver.observe(responsiveSvg);
