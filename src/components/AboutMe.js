import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    return (
        <>
        <div className="flex flex-col max-w-fit px-4 py-8 bg-gray-100">
            <Fade bottom>
            <div className="flex flex-row md:px-12 pb-4 text-subheader md:text-3xl text-blue-500 font-semibold">About Me</div>
            </Fade>
            <div className="px-6 space-y-4 md:space-y-5 md:px-24 md:text-lg">
                <Fade bottom>
                <p className="flex flex-row">
                    Hi! My name is Jacob Damasco & I’m a junior at USC studying computer engineering & computer science, CECS. Prior to USC, I studied at the University of San Francisco & graduated with a B.S. in Physics. I’m from the Bay Area, and so, I grew up being surrounded by tech. Ever since I took my first programming class, I’ve enjoyed using code to solve problems and implement them in small projects. Some of the new skills & tools I've recently picked up:
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row px-4 text-blue-500 font-semibold drop-shadow-lg">
                    {'>'} C/C++, Arduino UNO, React, JavaScript, Raspberry Pi 4 {'<'}
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row">
                    Putting CS aside, I love learning to cook new dishes, exploring new places/adventure spots, and working out. It won't be hard to find me exploring some good boba shops or coffee shops around the Bay Area or LA. Side note: one of my most favorite travel trips was to Tokyo, Japan. Short vlog recap coming soon! 
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row">
                    I'm currently looking for a Summer 2023 internship! Feel free to reach out & get in touch with me via the links above and at the bottom, or send a message via LinkedIn.
                </p>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default AboutMe;