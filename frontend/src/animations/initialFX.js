import gsap from "gsap";
import { landingLoop } from "./landingLoop";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Animate landing intro text
  ["#right-text h1", "#right-text h2", "#right-text span"].forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    // Wrap each char in span
    element.innerHTML = element.textContent
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");

    gsap.fromTo(
      element.querySelectorAll(".char"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.03,
        delay: 0.3,
      }
    );
  });

  // Animate left-text Designer → Developer swap
  landingLoop();
}
