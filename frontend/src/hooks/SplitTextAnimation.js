import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const useFadeInOutAnimation = ({
  ref,
  splitType = "chars",
  duration = 0.6,
  stagger = 0.05,
  loop = true,
}) => {
  useEffect(() => {
    if (!ref?.current) return;
    document.fonts.ready.then(() => {
    const split = new SplitText(ref.current, { type: splitType });

    const tl = gsap.timeline({
      repeat: loop ? -1 : 0,
      repeatDelay: 0.5,
    });

    tl.fromTo(
      split[splitType],
      { y: 100, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        ease: "back.out(1.7)",
        stagger,
      }
    ).to(
      split[splitType],
      {
        y: -100,
        opacity: 0,
        scale: 0.5,
        duration,
        ease: "power1.in",
        stagger,
      },
      ">2"
    );

    return () => {
      tl.kill();
      split.revert(); 
    };
  });
  }, [ref, splitType, duration, stagger, loop]);
};

export const useFadeScaleAnimation = ({
  ref,
  splitType = "chars",
  duration = 0.1,
  scrollTrigger= false,
  stagger = 0.05,
  start = "top 95%", 
}) => {
  useEffect(() => {
    if (!ref?.current) return;

    document.fonts.ready.then(() => {
      const split = new SplitText(ref.current, { type: splitType });
      let tl; // Declare a variable to hold the timeline

if (scrollTrigger) {
  // If we want the animation to trigger on scroll
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: start,
      toggleActions: "play none none reset",
    },
  });
  tl.fromTo(split[splitType], { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration, ease: "power2.out", stagger });
} else {
  // If we want the animation immediately
  tl = gsap.timeline();
  tl.fromTo(split[splitType], { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration, ease: "power2.out", stagger });
}

      return () => {
        tl.kill();
        split.revert();
      };
    });
  }, [ref, splitType, duration, scrollTrigger, stagger, start]);
};
