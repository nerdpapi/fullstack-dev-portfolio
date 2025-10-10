import React from 'react';
import { MdArrowOutward, MdCopyright } from "react-icons/md";

function Contact() {
    return (
        <section id="contact" className="bg-[#f2f2f2] relative h-screen py-5 md:h-[60vh] md:py-14 lg:py-25 px-5 md:px-10 lg:px-20">
            <div className='text-center  lg:text-left '>
                <h1 className="ClashDisplay text-4xl md:text-5xl lg:text-[70px] font-medium">CONTACT</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 xl:mt-30  gap-10 lg:gap-20">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <h2 className="ClashDisplay font-medium m-0 opacity-60">Email</h2>
                        <a href="mailto:example@mail.com" className="Geist text-[#0000ee] active:text-[#ff0000] transition-colors duration-200">
                            kunalkmr71@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5 ">
                        <div className="flex flex-col">
                            <h2 className="ClashDisplay font-medium m-0 opacity-60">Location</h2>
                            <a href="https://maps.app.goo.gl/kRjMmjyWUTDBaBPo7" className="Geist text-[#0000ee] active:text-[#ff0000] transition-colors duration-200" target="_blank">
                                Bengaluru, Karnataka
                            </a>
                        </div>
                        </div>
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <div className="flex flex-col">
                            <h2 className="ClashDisplay font-medium m-0 opacity-60">Phone</h2>
                                <a href="tel:+917004966310" data-cursor="disable" className="Geist text-[#0000ee] active:text-[#ff0000] transition-colors duration-200" target="_blank">
                                    +91 70049 66310
                                </a>
                        </div></div></div>
                <div className="flex flex-col gap-2 lg:gap-1">
                    <h3 className="ClashDisplay font-medium m-0 opacity-60">Social</h3>
                    <a
                        href="https://github.com/nerdpapi"
                        target="_blank"
                        className="flex gap-1 neue-machina text-2xl border-b-1 text-[#0000ee] active:text-[#ff0000] transition-colors duration-200"
                    >
                        Github <MdArrowOutward />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kunalkmr71/"
                        target="_blank"
                        className="flex gap-1 neue-machina text-2xl  border-b-1 text-[#0000ee] active:text-[#ff0000] transition-colors duration-200"
                    >
                        Linkedin <MdArrowOutward />
                    </a>
                    <a
                        href="https://x.com/kunalkmr12"
                        target="_blank"
                        className="flex gap-1 neue-machina text-2xl  border-b-1 text-[#0000ee] active:text-[#ff0000] transition-colors duration-200"
                    >
                        Twitter <MdArrowOutward />
                    </a>
                    <a
                        href="https://www.instagram.com/nerdpapi/"
                        target="_blank"
                        className="flex gap-1 neue-machina text-2xl  border-b-1 text-[#0000ee] active:text-[#ff0000] transition-colors duration-200"
                    >
                        Instagram <MdArrowOutward />
                    </a>
                </div>
                <div className="flex flex-col">
                    <h4 className='neue-machina font-medium md:text-xl lg:text-2xl m-0'>
                        Designed and Developed<br className='hidden lg:block'/> by  <span
                    className="inline-block md:text-xl lg:text-2xl"
                    style={{
                        background: 'linear-gradient(270deg, #ff2400, #e81d1d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'rgbShift 10s linear infinite'
                    }}
                >Kunal Kumar</span>
                    </h4>
                    <h5 className="font-GeistMono md:text-base lg:text-base font-medium leading-[20px] flex items-center gap-2 opacity-80">
                        <MdCopyright /> 2025
                    </h5>
                </div>
            </div>
        </section>
    )
}
export default Contact;