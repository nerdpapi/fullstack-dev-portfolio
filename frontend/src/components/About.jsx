import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const spans = containerRef.current.querySelectorAll("span");

    const splitInstances = [];
    document.fonts.ready.then(() => {
    spans.forEach((span, index) => {
      const split = new SplitText(span, { type: "chars" });
      splitInstances.push(split);
      console.log(splitInstances)

      gsap.set(split.chars, { opacity: 0, scale: 0 });
      gsap.to(split.chars, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: span,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      });
    });
  });

    return () => {
      // Cleanup: kill scrollTriggers and revert split
      ScrollTrigger.getAll().forEach((t) => t.kill());
      splitInstances.forEach((split) => split.revert());
    };
  }, []);
  return (
    <section ref={containerRef}
      id="about"
      className="bg-[#f2f2f2] relative h-screen py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-20 justify-center"
    >
      <div
        id="Heading"
        className="text-center xl:text-left mb-10"
      >
        <h1 className="text-4xl md:text-5xl xl:text-[80px] font-semibold bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      <div id="content" className="mx-auto xl:mx-0">
        <div className="hidden md:block space-y-6 xl:space-y-8">
          <p className="text-sm md:text-base xl:text-xl neue-machina">
            I’m <span className="font-semibold">Kunal</span>, a passionate and{" "}
            <span className="font-semibold">
              creative full-stack developer and designer
            </span>{" "}
            with extensive expertise in the{" "}
            <span className="font-semibold">
              MERN stack (MongoDB, Express, React, Node.js)
            </span>
            . Over the past year, I have dedicated myself to mastering modern web
            development, combining both frontend aesthetics and backend
            functionality to build web applications that are not only scalable
            and performant, but also intuitive and user-friendly.
          </p>

          <p className="text-sm md:text-base xl:text-xl neue-machina">
            My approach to development is rooted in the belief that{" "}
            <span className="font-semibold">
              code and design must coexist seamlessly
            </span>
            . I focus on writing clean, maintainable, and efficient code, while
            ensuring that the user experience is smooth, engaging, and visually
            appealing. By bridging the gap between technical precision and
            creative design, I strive to craft digital experiences that are both
            functional and delightful.
          </p>

          <p className="text-sm md:text-base xl:text-xl neue-machina">
            Throughout my journey, I have undertaken hands-on projects that
            allowed me to apply my knowledge to real-world scenarios, from{" "}
            <span className="font-semibold">
              developing responsive user interfaces with React
            </span>{" "}
            to designing{" "}
            <span className="font-semibold">
              robust backend APIs with Node.js and Express,
            </span>{" "}
            all while{" "}
            <span className="font-semibold">
              managing data effectively using MongoDB.
            </span>{" "}
            This holistic understanding of web development allows me to take a
            project from concept to deployment, ensuring every layer of the stack
            works harmoniously.
          </p>

          <p className="text-sm md:text-base xl:text-xl neue-machina">
            I am deeply passionate about exploring new technologies, solving
            complex problems, and continuously refining my skills. I thrive in
            collaborative environments, enjoy taking ownership of challenging
            tasks, and am always motivated by the opportunity to push the
            boundaries of what’s possible in the digital landscape.{" "}
            <span className="font-semibold">
              My goal is to create applications that not only meet client
              requirements but also provide meaningful, impactful experiences to
              users.
            </span>
          </p>

          <p className="text-sm md:text-base xl:text-xl neue-machina">
            In every project, I bring a combination of{" "}
            <span className="font-semibold">
              technical expertise, creativity, and thoughtful design
            </span>
            , ensuring that the end result is not just a product, but a
            well-crafted digital solution that resonates with its audience.
          </p>
        </div>

        {/* Mobile */}
        <div className="block md:hidden space-y-6 p-2">
          <p className="text-sm neue-machina">
            //. I’m <span className="font-semibold">Kunal</span>, a passionate and{" "}
            <span className="font-semibold">
              creative full-stack developer and designer
            </span>{" "}
            specializing in the{" "}
            <span className="font-semibold">
              MERN stack (MongoDB, Express, React, Node.js).
            </span>
          </p>
          <p className="text-sm neue-machina">
            //. I build scalable, user-friendly web applications that combine{" "}
            <span className="font-semibold">
              clean code with thoughtful, intentional design.
            </span>
          </p>
          <p className="text-sm neue-machina">
            //. Driven by a love for seamless digital experiences,{" "}
            <span className="font-semibold">
              I excel in both frontend aesthetics and backend functionality
            </span>
            , bringing technical expertise and creativity to every project.
          </p>
          <p className="text-sm neue-machina">
            //. With hands-on experience from projects and full-stack training,{" "}
            <span className="font-semibold">
              I’m always ready to tackle new challenges and push the boundaries
              of what’s possible in the digital landscape.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
