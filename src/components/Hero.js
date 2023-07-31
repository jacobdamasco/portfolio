import Fade from 'react-reveal/Fade';
import jacob from '../assets/jacob-seattle.png'
import resume from '../assets/Jacob Damasco Resume.pdf'

const Hero = () => {
    return (
        <>
        <div className="bg-gray-50 px-8 pb-8 md:p-8 md:flex md:flex-row">
            {/* left */}
            <div className="justify-center my-auto space-y-4 md:flex md:flex-col md:px-8 py-8 md:pr-16 md:basis-1/2 md:space-y-10 xl:basis-3/5">
                <Fade bottom cascade>
                    <div className="my-auto space-y-4 md:space-y-8">
                        <h1 className="text-sm-subtitle text-gray-500 md:text-subtitle">Hi, I'm</h1>
                        <h1 className="text-sm-name font-semibold drop-shadow-sm-name-green text-green-600 md:text-name md:font-normal md:drop-shadow-md-name-green">Jacob Damasco</h1>
                        <p className="text-sm-subtitle text-gray-500 md:text-subtitle">
                        I'm a junior <span className="font-normal text-green-600 hover:text-green-700">computer engineering/computer science</span> major at USC with a passion for engineering. 
                        </p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                {/* links */}
                <div className="flex flex-row py-4 md:justify-start">
                    <div className="flex flex-col md:basis-1/8 mr-3 md:mr-0">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-[0.75rem] py-[0.375rem] md:mr-4 md:py-2 md:px-8 rounded-xl text-sm md:text-xl">
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                        </button>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col basis-1/8 mx-3 md:mx-3 justify-center">
                        <a href="https://www.linkedin.com/in/jrdamasco/" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>

                    {/* Github */}
                    <div className="flex flex-col basis-1/8 mx-3 md:mx-3 justify-center">
                        <a href="https://github.com/jacobdamasco" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>

                    {/* Mail */}
                    <div className="flex flex-col basis-1/8 mx-3 md:mx-3 justify-center">
                        <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                        </a>
                    </div>


                    <div className="flex flex-col basis-1/2"></div>
                </div>
                </Fade>
            </div>

            {/* right */}
            <div className="px-8 md:flex md:basis-1/2 xl:basis-2/5">
                <Fade>
                <img src={jacob} alt="Jacob Damasco" className="shadow-lg shadow-gray-400 md:shadow-2xl md:shadow-gray-500 rounded-xl w-full object-cover object-center"/>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default Hero;