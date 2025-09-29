export const scsectionH6 = document.querySelector("#scsectionH6");
export const scsectionP = document.querySelector("#scsectionP");

export const scsectionkeyframes = [
  { filter: "blur(20px)", transform: "translateY(30px)" },
  { filter: "blur(0)", transform: "translateY(0px)" },
];
export const scsectionoption = { duration: 1000, fill: "forwards" };

export const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      v.target.animate(scsectionkeyframes, scsectionoption);
      me.unobserve(v.target);
    }
  });
});
