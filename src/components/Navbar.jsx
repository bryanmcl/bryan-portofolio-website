import React from "react";

function Navbar() {
    return(
        <nav className="flex py-4 px-10 w-full h-20 fixed top-0  bg-gradient-to-b from-[#000000] to-[rgba(0,0,0,0)] z-20">
            <a href="#" className="text-white font-bold mr-auto text-4xl">
                <span className="text-amber-400">BM </span>
                Porto
            </a>

            <ul className="flex gap-10 text-2xl">
                <li ><a className="text-white hover:text-amber-400" href="#about">About</a></li>
                <li ><a className="text-white hover:text-amber-400" href="#skill">Skill</a></li>
                <li ><a className="text-white hover:text-amber-400" href="#project">Project</a></li>
                <li ><a className="text-white hover:text-amber-400" href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar