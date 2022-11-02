import React from "react";
import Language from "./Language";

function About(){
    return(
        <div id="about" className="flex flex-col pt-24 px-20">
            <h1 data-aos="fade-right" className="text-white text-5xl font-bold underline decoration-amber-400 w-fit px-5 py-2">About Me</h1>
            <div data-aos="fade-right" className="box text-white w-[80vw]mt-10 p-5 pl-24 text-2xl">
                Hello! My name is Bryan Miraclo and I am a univeristy student currently studying at Bina Nusantara University.
                I am majoring in Computer Science on the 5th Semester. I also participate in a couple organization which is BNCC and HIMTI.
                <br/>
                <br/>
                <span  className="bg-amber-400 text-[rgb(28,28,28)]">In my first year,</span> I joined BNCC as an activist. I am able to participate in various of training such as Leadership, Public Speaking, Teamwork, and Time Management. Apart from soft skills,
                I also learn several technical skills such as <span  className="underline decoration-4 decoration-amber-400">UI/UX Design</span> and <span  className="underline decoration-4 decoration-amber-400">Basic Front End Web Development.</span>
                <br/>
                <br/>
                <span  className="bg-amber-400 text-[rgb(28,28,28)]">In my second year,</span> I am able to joined another organization called HIMTI. I am placed in a Web Development division which gave
                me an oppurtunity to contribute in developing a website for the organization alongside my team in the division. I am really interested in becoming a
                <span  className="underline decoration-4 decoration-amber-400"> Front End Developer</span> as it fits with my skillset and hope to be able to expand it even further. 
            </div>

            <h1 data-aos="fade-right" id="skill" className="text-white self-end text-5xl font-bold underline decoration-amber-400 w-fit mt-24 mb-14">Skills</h1>
                <div className="flex flex-col flex-wrap">
                    <h1 data-aos="fade-right" className="text-white text-5xl font-bold self-end bg-amber-400 w-fit px-5 py-2">Language</h1>
                    <div className="flex self-end justify-end mt-5 gap-10 min-h-[100px] w-[80vw] flex-wrap">
                        <Language delay="0" color = "from-amber-400" name="HTML"/>
                        <Language delay="100" color = "from-amber-400" name="CSS"/>
                        <Language delay="200" color = "from-amber-400" name="JAVASCRIPT"/>
                        <Language delay="300" color = "from-amber-400" name="PHP"/>
                    </div>
                </div>

                <div className="flex flex-col flex-wrap mt-5">
                    <h1 data-aos="fade-left" className="text-white text-5xl font-bold self bg-amber-600 w-fit px-5 py-2">Framework</h1>
                    <div className="flex mt-5 gap-10 min-h-[100px]">
                        <Language delay="0" color = "from-amber-600" name="LARAVEL"/>
                        <Language delay="100" color = "from-amber-600" name="REACTJS"/>
                        <Language delay="100" color = "from-amber-600" name="TAILWINDCSS"/>
                    </div>
                </div>

                <div className="flex flex-col flex-wrap mt-5">
                    <h1 data-aos="fade-right" className="text-white text-5xl font-bold self-end bg-amber-800 w-fit px-5 py-2">Design</h1>
                    <div className="flex self-end mt-5 gap-10 min-h-[100px]">
                        <Language delay="0" color = "from-amber-800" name="FIGMA"/>
                        <Language delay="100" color = "from-amber-800" name="ADOBE XD"/>
                    </div>
                </div>
        </div>
    )

}

export default About