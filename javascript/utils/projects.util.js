function animateProjects() {
  const projects = document.querySelectorAll(".project");
  const animation = [
    { opacity: "0", transform: "translateY(6vw)" },
    { opacity: "1", transform: "translateY(0)" },
  ];

  const duration = {
    duration: 500,
    iterations: 1,
    fill: "forwards",
    easing: "cubic-bezier(.8,.62,.85,1.34)",
  };

  let delay = 0;
  projects.forEach((project) => {
    const anim = project.animate(animation, Object.assign(duration, { delay }));
    delay += 50;
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  animateProjects();
});
