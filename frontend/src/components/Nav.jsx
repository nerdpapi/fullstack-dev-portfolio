import { useSmoothScroll } from "../hooks/useSmoothScroll";
function Nav() {
  useSmoothScroll();
    return (
        <nav className="flex flex-col  sm:flex-row justify-center  sm:mb-0 mb-2 items-center gap-5 sm:gap-10 text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-100">
            {/* Navigation links */}

            <a
                href="#about"
                className="relative group px-2 py-1 hover:text-red-500 transition-colors duration-300"
            >
                ABOUT
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            {/* <a 
        href="#skills" 
        className="relative group px-2 py-1 hover:text-red-500 transition-colors duration-300"
      >
        Skills
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
      </a> */}
            <a
                href="#work"
                className="relative  group px-2 py-1 hover:text-red-500 transition-colors duration-300"
            >
                WORK
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                href="#career"
                className="relative  group px-2 py-1 hover:text-red-500 transition-colors duration-300"
            >
                CAREER
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                href="#project"
                className="relative  group px-2 py-1 hover:text-red-500 transition-colors duration-300"
            >
                PROJECTS
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                href="#contact"
                className="relative group px-2 py-1"
            >
                <span
                    className="inline-block text-2xl"
                    style={{
                        background: 'linear-gradient(270deg, #ff2400, #e81d1d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'rgbShift 10s linear infinite'
                    }}
                >
                    Let's Talk
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>

        </nav>
    );
}

export default Nav;
