import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const flexRef = useRef(null);
  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const togglePlay = () => {
  //   if (!videoRef.current) return;
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };
  useEffect(() => {
    const container = containerRef.current;
    const flex = flexRef.current;
    console.log(container);
    console.log(flex);
    if (!container || !flex) return;

    const updateScroll = () => {
      const totalWidth = flex.scrollWidth;
      const padding = 100;
      const viewportWidth = container.offsetWidth;
      const scrollDistance = totalWidth - viewportWidth + padding;

      gsap.to(flex, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();

    // Recalculate on window resize for responsiveness
    window.addEventListener("resize", updateScroll);
    console.log(updateScroll);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updateScroll);
      console.log(updateScroll);
    };
  }, []);

  return (
    <section
      id="project"
      className="bg-[#f2f2f2] relative h-screen py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Sticky heading */}
      <div className="text-center xl:text-left mb-15 md:mb-30 xl:mb-30 z-10 bg-[#f2f2f2]">
        <h1 className="text-4xl md:text-5xl xl:text-[80px] font-bold">
          <span className="italic gilroy">PRO</span>
          <span className="bg-gradient-to-r from-[#9932cc] to-[#ee0000] bg-clip-text text-transparent gilroy">
            JECTS
          </span>
        </h1>
      </div>

      {/* Horizontal Scroll Flex */}
      <div ref={flexRef} className="flex gap-0 ">
        {/* Project 1 */}
        <div className=" flex-shrink-0 w-full sm:w-[80vw] md:w-[60vw] xl:w-[40vw] bg-[#f2f2f2] p-6 border border-black">
          <div className="work-info mb-6">
            <div className="work-title flex items-center gap-5 mb-4">
              <h1 className="ClashDisplay text-5xl font-medium text-[#9932cc]">01</h1>
              <div>
                <h2 className="ClashDisplay text-sm sm:text-base md:text-xl text-[#3545d1] font-normal">Link Leap(URL Shortener Website)</h2>
                <p className="ClashDisplay text-[#7b88c6]">Full Stack</p>
              </div>
            </div>
            <h2 className="ClashDisplay font-semibold text-[#3545d1]">Tools and Features</h2>
            <p className="ClashDisplay text-[#7b88c6]">MongoDB,&nbsp; Express,&nbsp; React(Vite),&nbsp; Node.js</p>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden group">
  <video
    // ref={videoRef}
    // onClick={togglePlay}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/linkleapwebsite.webm" type='video/webm; codecs="vp9"' />
  </video>
  <a
    href="https://github.com/nerdpapi/url-shortener-app.git"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 left-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <FiGithub />
  </a>

  {/* Arrow overlay */}
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 right-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <MdArrowOutward />
  </a>
</div>

        </div>
        {/* Project 2 */}
        <div className="flex flex-col-reverse flex-shrink-0 w-[80vw] md:w-[60vw] xl:w-[40vw] bg-[#f2f2f2] p-6 border border-black">
          <div className=" mt-6">
            <div className="work-title flex items-center gap-5 mb-4">
              <h1 className="ClashDisplay text-5xl font-medium text-[#9932cc]">02</h1>
              <div>
                <h2 className="ClashDisplay text-sm sm:text-base md:text-xl text-[#3545d1] font-normal">Users-data Dashboard(RTK)</h2>
                <p className="ClashDisplay text-[#7b88c6]">Frontend</p>
              </div>
            </div>
            <h2 className="ClashDisplay font-semibold text-[#3545d1]">Tools and Features</h2>
            <p className="ClashDisplay text-[#7b88c6]">React,&nbsp; Redux Toolkit,&nbsp; HTML/CSS(Tailwind)</p>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden group">
  <video
    // ref={videoRef}
    // onClick={togglePlay}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/userdatawebsite.webm" type='video/webm; codecs="vp9"' />
  </video>
  <a
    href="https://github.com/nerdpapi/users-data-redux.git"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 left-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <FiGithub />
  </a>

  {/* Arrow overlay */}
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 right-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <MdArrowOutward />
  </a>
</div>

        </div>

        {/* Project 3 */}
        <div className=" flex-shrink-0 w-full sm:w-[80vw] md:w-[60vw] xl:w-[40vw] bg-[#f2f2f2] p-6 border border-black">
          <div className="work-info mb-6">
            <div className="work-title flex items-center gap-5 mb-4">
              <h1 className="ClashDisplay text-5xl font-medium text-[#9932cc]">03</h1>
              <div>
                <h2 className="ClashDisplay text-sm sm:text-base md:text-xl text-[#3545d1] font-normal">Movie-database Dashboard</h2>
                <p className="ClashDisplay text-[#7b88c6]">Frontend</p>
              </div>
            </div>
            <h2 className="ClashDisplay font-semibold text-[#3545d1]">Tools and Features</h2>
            <p className="ClashDisplay text-[#7b88c6]">React,&nbsp; react-router-dom,&nbsp; HTML/CSS(Tailwind)</p>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden group">
  <video
    // ref={videoRef}
    // onClick={togglePlay}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/moviedatabasewebsite.webm" type='video/webm; codecs="vp9"' />
  </video>
  <a
    href="https://github.com/nerdpapi/movie-database-daashboard.git"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 left-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <FiGithub />
  </a>

  {/* Arrow overlay */}
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 right-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <MdArrowOutward />
  </a>
</div>

        </div>

        {/* Project 4 */}
        <div className="flex flex-col-reverse flex-shrink-0 w-[80vw] md:w-[60vw] xl:w-[40vw] bg-[#f2f2f2] p-6 border border-black">
          <div className=" mt-6">
            <div className="work-title flex items-center gap-5 mb-4">
              <h1 className="ClashDisplay text-5xl font-medium text-[#9932cc]">04</h1>
              <div>
                <h2 className="ClashDisplay text-sm sm:text-base md:text-xl text-[#3545d1] font-normal">SaaS Design Platform(Freelance Project)</h2>
                <p className="ClashDisplay text-[#7b88c6]">Full Stack</p>
              </div>
            </div>
            <h2 className="ClashDisplay font-semibold text-[#3545d1]">Tools and Features</h2>
            <p className="ClashDisplay text-[#7b88c6]">MongoDB,&nbsp; Express,&nbsp; React(Next.js),&nbsp; Node.js</p>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden group">
  <video
    // ref={videoRef}
    // onClick={togglePlay}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/logoipsumwebsite.webm" type='video/webm; codecs="vp9"' />
  </video>
  <a
    href="https://github.com/nerdpapi/atozdebugProject.git"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 left-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <FiGithub />
  </a>
  {/* Arrow overlay */}
  <a
    href="https://atozdebug-project.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 right-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <MdArrowOutward />
  </a>
</div>

        </div>

        {/* Project 5 */}
        <div className=" flex-shrink-0 w-full sm:w-[80vw] md:w-[60vw] xl:w-[40vw] bg-[#f2f2f2] p-6 border border-black">
          <div className="work-info mb-6">
            <div className="work-title flex items-center gap-5 mb-4">
              <h1 className="ClashDisplay text-5xl font-medium text-[#9932cc]">05</h1>
              <div>
                <h2 className="ClashDisplay text-sm sm:text-base md:text-xl text-[#3545d1] font-normal">3M Corporate Official Website</h2>
                <p className="ClashDisplay text-[#7b88c6]">UI/UX & Frontend</p>
              </div>
            </div>
            <h2 className="ClashDisplay font-semibold text-[#3545d1]">Tools and Features</h2>
            <p className="ClashDisplay text-[#7b88c6]">PhP,&nbsp; HTML,&nbsp; Bootstrap CSS,&nbsp; React JS</p>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden group">
  <video
    // ref={videoRef}
    // onClick={togglePlay}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/videos/3Mwebsite.webm" type='video/webm; codecs="vp9"' />
  </video>
  <a
    href="https://github.com/yourusername/yourrepo"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 left-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <FiGithub />
  </a>

  {/* Arrow overlay */}
  <a
    href="https://3mcorporate.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute bottom-4 right-4
      w-12 h-12 rounded-full 
      flex justify-center items-center 
      text-2xl 
      text-[#ffffff]
      bg-[#3545d1]
      active:bg-[#bdc4ff]
    shadow-[0_0_8px_2px_rgba(63,81,181,0.6),inset_0_0_6px_0_rgba(0,0,128,0.5)]
      opacity-100
      md:opacity-0 
      transition-opacity duration-300
      md:group-hover:opacity-100
      cursor-pointer
    "
  >
    <MdArrowOutward />
  </a>
</div>
        </div>
      </div>
    </section>
  );
}
