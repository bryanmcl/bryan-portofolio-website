import React from "react";
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"
import github from "../assets/github.png"

function Footer(){
    return(
        <footer id="contact" className="bg-black flex items-center py-4 px-5">
            <p className="text-amber-400 font-bold mr-auto">© 2022 Bryan Miraclo</p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/bryan.mcl/?hl=en" target = "_blank"><img className="w-7 bg-amber-400 p-1 rounded-md" src={instagram} alt="" /></a>
                <a href="https://www.linkedin.com/in/bryan-miraclo-a176141b6/" target = "_blank"><img className="w-7 bg-amber-400 p-1 rounded-md" src={linkedin} alt="" /></a>
                <a href= "mailto:bryan.miraclo@binus.ac.id" target = "_blank"><img className="w-7 bg-amber-400 p-1 rounded-md" src={email} alt="" /></a>
                <a href="https://github.com/bryanmcl" target = "_blank"><img className="w-7 bg-amber-400 p-1 rounded-md" src={github} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer