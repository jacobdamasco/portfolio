import Fade from 'react-reveal/Fade';
import jacob from '../assets/jacob-seattle.png'
import resume from '../assets/Jacob-Damasco-Resume.pdf'
import github from '../assets/icons/github-dark.png'
import linkedin from '../assets/icons/linkedin-dark.png'
import mail from '../assets/icons/mail-dark.png'

const Hero = () => {
    return (
        <>
        <div className="bg-green-6 px-10 pb-8 md:p-8 md:flex md:flex-row">
            {/* left */}
            <div className="justify-center my-auto space-y-10 md:flex md:flex-col md:px-8 py-8 md:pr-16 md:basis-1/2 md:space-y-10 xl:basis-3/5">
                <Fade bottom cascade>
                    <div className="text-green-2 text-xl my-auto space-y-5 md:space-y-8">
                        <h1 className="md:text-subtitle">Hi, I'm</h1>
                        <h1 className="text-green-1 text-4xl font-black drop-shadow-1 md:text-name md:font-normal md:drop-shadow-md-name-green">Jacob Damasco.</h1>
                        <p className="md:text-subtitle">
                        I'm a <span className="text-green-3 hover:font-bold hover:cursor-default">software engineering intern</span> at LACERA building products & tools with <span className="text-green-3 hover:font-bold hover:cursor-default">TypeScript & Node.js</span>. 
                        </p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                {/* links */}
                <div className="flex items-center justify-items-center">
                    <div className="flex basis-1/4 items-center justify-center">
                        <button className="rounded-xl bg-green-4 text-green-2 px-4 py-1.5 md:mr-4 hover:bg-green-3 hover:text-green-5 hover:font-bold">
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                        </button>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex basis-1/4 items-center justify-center">
                        <a href="https://www.linkedin.com/in/jrdamasco/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Jacob Damasco" className="w-8"/>
                        </a>
                    </div>

                    {/* Github */}
                    <div className="flex basis-1/4 items-center justify-center">
                        <a href="https://github.com/jacobdamasco" target="_blank" rel="noreferrer">
                            <img src={github} alt="Jacob Damasco" className="w-8"/>   
                        </a>
                    </div>

                    {/* Mail */}
                    <div className="flex basis-1/4 items-center justify-center">
                        <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">
                            <img src={mail} alt="Jacob Damasco" className="w-8"/>  
                        </a>
                    </div>
                </div>
                </Fade>
            </div>

            {/* right */}
            <div className="md:flex md:basis-1/2 xl:basis-2/5">
                <Fade>
                <img src={jacob} alt="Jacob Damasco" className="md:shadow-2xl md:shadow-gray-500 rounded-xl w-full object-cover object-center"/>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default Hero;