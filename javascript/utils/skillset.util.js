const skillLogoAnimationFrames = [
  { scale: 0, opacity: 1 },
  { scale: 1, opacity: 1 },
];
const skillLogoAnimation = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(0, 0, 0.28, 1)",
};

const skillMeterAnimationFrames = [
  { scale: "0 1", opacity: 1 },
  { scale: "1 1", opacity: 1 },
];

const skillMeterAnimation = {
  duration: 2000,
  iteration: 1,
  fill: "forwards",
  easing: "ease-out",
};

function animateSkillset() {
  const skills = document.querySelectorAll(".skill");
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
  skills.forEach((skill) => {
    const anim = skill.animate(animation, Object.assign(duration, { delay }));
    anim.onfinish = (event) => {
      const skillMeter = skill.querySelector(".skill-bar > div");
      const skillLogo = skill.querySelector(".skill-logo");

      skillMeter.animate(skillMeterAnimationFrames, skillMeterAnimation);
      skillLogo.animate(skillLogoAnimationFrames, skillLogoAnimation);
    };
    delay += 50;
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  animateSkillset();
});
