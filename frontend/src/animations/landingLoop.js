import gsap from "gsap";

export function landingLoop(designerEl, developerEl) {
  // Split heading into spans per letter
  const splitText = (el) => {
    const text = el.innerText;
    el.innerHTML = "";
    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      el.appendChild(span);
    });
    return el.querySelectorAll("span");
  };

  const designerLetters = splitText(designerEl);
  const developerLetters = splitText(developerEl);

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  designerLetters.forEach((letter, i) => {
    tl.fromTo(
      letter,
      { y: 100, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      i * 0.05
    );
    tl.to(
      letter,
      { y: -100, opacity: 0, scale: 0.5, duration: 0.6, ease: "power1.in" },
      ">1"
    );
  });

  developerLetters.forEach((letter, i) => {
    tl.fromTo(
      letter,
      { y: 100, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      designerLetters.length * 0.05 + i * 0.05
    );
    tl.to(
      letter,
      { y: -100, opacity: 0, scale: 0.5, duration: 0.6, ease: "power1.in" },
      `>${1}`
    );
  });
}
