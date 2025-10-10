import { useRef } from "react";
import { useFadeInOutAnimation, useFadeScaleAnimation } from "../hooks/SplitTextAnimation";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import { TbNotes } from "react-icons/tb";
function Home() {
    const textRef = useRef(null);
    useFadeInOutAnimation({ref: textRef});
    const fadeRef= useRef(null);
    useFadeScaleAnimation({ ref: fadeRef});
    return (
        <section id='home' className="h-screen">
            <div className='flex flex-col bg-[#f2f2f2] sm:flex-row justify-normal h-full items-start'>
                <div id="right-text" className="mt-40 ml-5 xl:mt-40 xl:ml-15 text-left">
                    <h1 className=" text-xl md:text-3xl xl:text-4xl font-light leading-[0.5]">
                        hello! I'm
                    </h1>
                    <h2 className=" text-2xl md:text-5xl xl:text-[70px] font-bold bg-gradient-to-r from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">
                        KUNAL KUMAR
                    </h2>
                    <span className="font-light text-l md:text-3xl xl:text-4xl  text-[#0000EE] tracking-wide">
                        <Typewriter
                            words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                            loop={5}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={70}
                            delaySpeed={2000}
                        />
                    </span>
                    <div className='flex gap-6 text-[#0000ee] md:gap-8 xl:gap-10 justify-left mt-3 md:mt-6 xl:mt-6'>
                        <span>
                            <a href="https://github.com/nerdpapi" target="_blank" label="GitHub" className="group">
                                <FaGithub className="text-lg md:text-3xl xl:text-3xl group-hover:scale-110 group-hover:text-[#facc15] transition-all duration-300" />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/kunalkmr71/" target="_blank" label="LinkedIn" className="group">
                                <FaLinkedinIn className="text-lg md:text-3xl xl:text-3xl group-hover:scale-110 group-hover:text-[#0084ff] transition-all duration-300" />
                            </a>
                        </span>
                        <span>
                            <a href="https://x.com/kunalkmr12" target="_blank" label="X" className="group">
                                <FaXTwitter className="text-lg md:text-3xl xl:text-3xl group-hover:scale-110 group-hover:text-[#000000] transition-all duration-300" />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/nerdpapi/" target="_blank" label="Instagram" className="group">
                                <FaInstagram className="text-lg md:text-3xl xl:text-3xl group-hover:scale-110 group-hover:text-[#E4405F] transition-all duration-300" />
                            </a>
                        </span>

                    </div>
                    <div className="flex items-center mt-5 md:mt-10 xl:mt-10">
                        <a href="https://tinyurl.com/2cmfyccd" target="_blank" className="flex items-center space-x-2 transition-all duration-300 hover:scale-110 hover:text-red-600 "
                        >
                            <TbNotes className="text-lg md:text-3xl xl:text-3xl " />
                            <span className=" text-lg md:text-3xl xl:text-3xl font-semibold ">RESUME</span>
                        </a>
                    </div>


                </div>
                <div
                    id="left-text"
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 xl:top-1/2 xl:left-auto xl:right-12 xl:translate-x-0 text-center">
                    <span className="m-0 text-xl sm:text-3xl md:text-4xl ClashDisplay block">
                    //. A Ceative
                    </span>
                    <div  ref={textRef}>
                    <h1 className="relative flex justify-center overflow-hidden text-[#c481ff] m-0 text-3xl md:text-5xl xl:text-[80px] font-semibold tracking-tight leading-snug sm:leading-[1.1] md:leading-[0.9]">
                        DESIGNER 
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 bg-gradient-to-t from-[#f2f2f2] via-transparent to-transparent"></div>

                    </h1>
                    <h2 className="relative flex justify-center  overflow-hidden text-3xl md:text-5xl xl:text-[80px] m-0 -mt-6 sm:-mt-7 md:-mt-7 font-semibold tracking-tight z-20 " >
                        DEVELOPER
                        
                    </h2>
                    </div>
                </div>
                <div
                    id="bottom-text"
                    className="absolute bottom-48 md:bottom-1/3 xl:bottom-20 px-5 md:px-20 tracking-normal text-center"
                >
                    <span className="text-xs md:text-xl neue-machina italic font-semibold" ref={fadeRef}>
                        //.Transforming pixels into purposeful experiences — a creative designer & developer focused on crafting interactive, visually refined, and fully responsive digital products.//
                    </span>
                </div>
            </div>

        </section>

    );
}

export default Home;
