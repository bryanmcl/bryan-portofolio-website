import React from "react";
import foto from "../assets/profile-photo.jpg"

function Hero(){
    return(
        <div className="h-[100vh] flex items-center relative overflow-hidden">
            <img className="w-full absolute -top-96 right-0 -z-10 img-grad" src={foto} />
            <a href="#about" className="absolute bottom-4 left-1/2 text-amber-400 text-2xl font-bold animate-bounce text-center">See More<br/>V</a>
            <div data-aos ="fade-right" data-aos-delay = "0" className="bg-amber-400 w-2 h-72 ml-20"></div>
            <div className="ml-20 flex flex-col justify-center">
                <h1 data-aos ="fade-right" data-aos-delay = "200" className="text-white text-8xl font-bold">Hello there.</h1>
                <h1 data-aos ="fade-right" data-aos-delay = "300" className="text-white text-8xl font-bold mb-4">I'm Bryan Miraclo</h1>
                <h2 data-aos ="fade-right" data-aos-delay = "600" className="text-amber-400 text-4xl">University Student at Bina Nusantara University</h2>
            </div>
        </div>
    )
}

export default Hero