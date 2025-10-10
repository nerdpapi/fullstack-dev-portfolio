import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Career() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;
      gsap.fromTo(
        timelineRef.current,
        { opacity:0, height: "0%" },
        {
          opacity:1,
          height: "85%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom 100%",
            scrub: 1,
          },
        }
      );
    

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
  }, []);

  return (
    <section id="career" className="h-screen" ref={sectionRef}>
        
      <div className=" bg-[#f2f2f2] relative h-screen py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-20" ref={sectionRef}>
      <h2 className=" text-4xl md:text-5xl xl:text-[80px] font-semibold bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent leading-10 xl:leading-[70px] gilroy md:font-normal text-center mb-5 md:mb-20">
  My career &<br className="hidden xl:block"/> experience
</h2>
        <div className="relative flex flex-col mx-auto m-0">
          <div className="absolute top-0 left-0 md:left-0 xl:left-1/2 xl:-translate-x-1/2 w-1.5 bg-gradient-to-t from-[#9932cc] via-[#9932cc]/80 to-transparent"
 ref={timelineRef}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
            bg-[#9932cc] w-[15px] h-[15px] rounded-full 
            shadow-[0_0_10px_5px_#ffffff,0_0_15px_7px_#9932cc,0_0_20px_10px_#ffffff,0_0_15px_7px_#9932cc]">
</div>

          </div>
          <div className="flex flex-col gap-5 md:gap-20 xl:gap-10 mx-10 md:mx-15 xl:mx-30">
          <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
            <div className="flex flex-col sm:flex-row md:gap-5 xl:gap-40">
              <div className="career-role">
                <h1 className="text-xl md:text-3xl lg:text-3xl  font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">Associate HR Consultant</h1>
                <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">3M Corporate Solutions</h2>
              </div>
              <h3 className="text-base md:text-3xl lg:text-3xl font-normal ClashDisplay">2022</h3>
            </div>
            <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
            Spearheaded end-to-end recruitment for IT and non-IT mid-to-senior roles, while also designing and maintaining <span className="italic font-medium ClashDisplay"> company’s</span> website frontends with seamless data migrations.</p>
            <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
            <span className="italic font-medium ClashDisplay">Spearheaded senior IT & non-IT hiring; developed company's frontends.</span></p>
          
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
            <div className="flex flex-col sm:flex-row  md:gap-5 xl:gap-40">
             <div className="career-role">
             <h1 className="text-xl md:text-3xl lg:text-3xl  font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">Full-Stack Developer<br/>(Trainee)</h1>
              <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">AlmaBetter</h2>
              </div>
              <h3 className="text-base md:text-3xl lg:text-3xl font-normal ClashDisplay">2024</h3>
            </div>
            <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
            Trained in the <span className=" font-medium ClashDisplay"> MERN </span>stack through hands-on
             projects, focusing on building responsive web applications and mastering both frontend and backend development.</p>
               <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
            <span className="italic font-medium ClashDisplay">Built responsive full-stack web apps with the MERN stack.</span></p>
          
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
            <div className="flex flex-col sm:flex-row  md:gap-5 xl:gap-40">
             <div className="career-role">
             <h1 className="text-xl md:text-3xl lg:text-3xl  font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">Freelance<br className="hidden md:block"/> & Upskilling</h1>
              <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#ff2a00] to-[#ff00ee] bg-clip-text text-transparent">Freelance</h2>
              </div>
              <h3 className="text-base md:text-3xl lg:text-3xl ClashDisplay text-red-500">NOW</h3>
            </div>
            <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
            Built personal and client projects while continuously
             learning modern web technologies and improving full
              stack development skills.
            </p>
            <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
            <span className="italic font-medium ClashDisplay">Built projects while upskilling in modern full-stack development.</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
