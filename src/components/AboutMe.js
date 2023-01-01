const AboutMe = () => {
    return (
        <>
        <div className="flex flex-col bg-gray-100 px-16 py-4">
            <div className="flex flex-row py-4 text-2xl text-blue-500 font-semibold">About Me</div>
            <div className="px-24">
                <div className="flex flex-row py-2 text-lg">
                    Hi! My name is Jacob Damasco & I’m a junior at USC studying computer engineering & computer science, CECS. Prior to USC, I studied at the University of San Francisco & graduated with a B.S. in Physics. I’m from the Bay Area, and so, I grew up being surrounded by tech. Ever since I took my first programming class, I’ve enjoyed using code to solve problems and implement them in small projects. Some of the new skills I've recently picked up:
                </div>
                <div className="flex flex-row py-2 px-4 text-lg text-blue-500 font-semibold drop-shadow-lg"> > React, JavaScript, C/C++, Arduino UNO</div>
                <div className="flex flex-row py-2 text-lg">
                    Putting CS aside, I love learning to cook new dishes, exploring new places/adventure spots, and working out. One of my most favorite travel trips was to Tokyo, Japan. Click here
                    to see a short vlog recap! 
                </div>
                <div className="flex flex-row py-2 text-lg">
                    Feel free to reach out & get in touch with me via the links above and at the bottom, or send a message via LinkedIn.
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutMe;