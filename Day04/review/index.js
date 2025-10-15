const Mobile = document.querySelector("#Mobile");

const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(0px)" },
];
const option = { duration: 500, fill: "forwards" };

const ob = new IntersectionObserver(
  (entries, me) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        v.target.animate(keyframes, option);
        me.unobserve(v.target);
      }
    });
  },
  { root: null, rootMargin: "0px 0px -20% 0px" }
);
ob.observe(Mobile);
