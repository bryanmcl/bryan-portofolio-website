import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData"

function Project(){
    const projectPersonal = projectData[0].map(item =>{
        return(
            <ProjectCard
                key = {item.id}
                data = {item}
            />
        )
    })
    const projectHimti = projectData[1].map(item =>{
        return(
            <ProjectCard
                key = {item.id}
                data = {item}
            />
        )
    })
    const projectAssignment = projectData[2].map(item =>{
        return(
            <ProjectCard
                key = {item.id}
                data = {item}
            />
        )
    })
    return(
        <div id="project" className="flex flex-col pt-24 px-20">
            <h1 data-aos="fade-right" className="text-white text-5xl font-bold underline decoration-amber-400 w-fit">Project List</h1>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">Personal Project</h2>
                </div>

                <div className="flex gap-10 mt-5 items-center overflow-x-auto project-cards overflow-y-hidden py-5" >
                    {projectPersonal}
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">HIMTI</h2>
                </div>

                <div className="flex gap-10 mt-5 items-center overflow-x-auto project-cards overflow-y-hidden py-5">
                    {projectHimti}
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center">
                    <div className="w-5 h-5 bg-amber-400 rounded-full mr-5"></div>
                    <h2 className="text-white font-bold text-3xl">Assignment</h2>
                </div>

                <div className="flex gap-10 mt-5 items-center overflow-x-auto project-cards overflow-y-hidden py-5">
                  {projectAssignment}
                </div>
            </div>
        </div>
    )

}

export default Project