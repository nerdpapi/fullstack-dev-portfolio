// src/utils/scroll.js
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register plugin once
gsap.registerPlugin(ScrollToPlugin);
console.log("Plugins registered:", gsap.core.globals());

// Smooth scroll function
export const scrollToSection = (target) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: 70, // adjust for sticky header height
    },
    ease: "power2.inOut",
  });
};
