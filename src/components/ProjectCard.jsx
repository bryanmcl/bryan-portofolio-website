import React from "react";


function ProjectCard(props){
    const language = props.data.language.map(item =>{
        return (
            <div className="bg-black text-white font-bold border-amber-400 border-2 px-4 rounded-full">{item}</div>
        )
    })
    return(
        <a href={props.data.url} data-aos="fade-up" data-aos-mirror="false" data-aos-delay={props.data.delay} target ="_blank" className="card bg-[#151515] w-[400px] h-[300px] rounded-lg relative flex flex-col flex-shrink-0 flex-grow-0 items-center overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <div className="absolute top-2 left-2 flex flex-wrap w-full gap-2">
                {language}
            </div>
            <div className="w-full h-[250px] absolute top-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(255,255,255,0.2)]"></div>
            <img className="h-[250px] object-cover" src={`images/${props.data.fotoweb}`} alt="" />
            <h1 className="font-bold text-xl p-2 text-white">{props.data.name}</h1>
        </a>
    )
}

export default ProjectCard