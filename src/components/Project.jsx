import React from "react";
import ProjectCard from "./ProjectCard";
import gamecounter from "../assets/gamecounter.jpg"
import blackjack from "../assets/blackjack.jpg"

function Project(){
    return(
        <div id="project" className="flex flex-col pt-24 px-20">
            <h1 data-aos="fade-right" className="text-white text-5xl font-bold underline decoration-amber-400 w-fit">Project List</h1>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">Personal Project</h2>
                </div>

                <div className="flex flex-wrap gap-10 mt-5">
                    <ProjectCard delay = "0" fotoweb = {gamecounter} name="Game Counter" url= "https://bryan-gamecounter.netlify.app/"/>
                    <ProjectCard delay = "100" fotoweb = {blackjack} name="Blackjack" url= "https://bryan-blackjack.netlify.app/"/>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">HIMTI</h2>
                </div>

                <div className="flex flex-wrap gap-10 mt-5">
                    <ProjectCard delay = "0" fotoweb = {gamecounter} name="Game Counter" url= "https://bryan-gamecounter.netlify.app/"/>
                    <ProjectCard delay = "100" fotoweb = {blackjack} name="Blackjack" url= "https://bryan-blackjack.netlify.app/"/>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">Assignment</h2>
                </div>

                <div className="flex flex-wrap gap-10 mt-5">
                    <ProjectCard delay = "0" fotoweb = {gamecounter} name="Game Counter" url= "https://bryan-gamecounter.netlify.app/"/>
                    <ProjectCard delay = "100" fotoweb = {blackjack} name="Blackjack" url= "https://bryan-blackjack.netlify.app/"/>
                </div>
            </div>
        </div>
    )

}

export default Project