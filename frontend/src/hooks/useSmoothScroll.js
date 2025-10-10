// src/hooks/useSmoothScroll.js
import { useEffect } from "react";
import { scrollToSection } from "../utils/scroll";

export const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      const handleClick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        if (targetId && targetId !== "#") scrollToSection(targetId);
      };
      link.addEventListener("click", handleClick);

      return () => link.removeEventListener("click", handleClick);
    });
  }, []);
};
