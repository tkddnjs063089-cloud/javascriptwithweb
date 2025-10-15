import { keyframes, option } from "./animation.js";
import { boxes } from "./query.js";

boxes.forEach((v, i) => {
  v.animate(keyframes, { ...option, delay: 300 * i });
});
