import React from "react";


function ProjectCard(props){
    return(
        <a href={props.url} data-aos="fade-up" data-aos-mirror="false" data-aos-delay={props.delay} target ="_blank" className="bg-[#151515] w-[350px] h-[250px] rounded-lg relative flex flex-col items-center overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <div className="w-full h-[200px] absolute top-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(255,255,255,0.2)]"></div>
            <img className="h-[200px] object-cover" src={props.fotoweb} alt="" />
            <h1 className="font-bold text-xl p-2 text-white">{props.name}</h1>
        </a>
    )
}

export default ProjectCard