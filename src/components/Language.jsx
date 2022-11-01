import React from "react";

function Language(props){
    return(
        <h2 data-aos="flip-right" data-aos-delay={props.delay} className={`bg-gradient-to-r ${props.color} to-[rgb(255,214,214)] p-[10px] rounded-full flex justify-center items-center h-fit`}>
            <span className=" text-white px-10 py-4 bg-[rgb(28,28,28)] font-bold text-xl hover:text-3xl rounded-full hover:text-black hover:bg-transparent transition-all">
                {props.name}
            </span>
        </h2>
    )
}

export default Language