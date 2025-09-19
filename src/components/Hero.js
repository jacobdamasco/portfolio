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
            <div className="justify-center my-auto space-y-10 py-8 md:flex md:flex-col md:px-12 md:pr-16 md:basis-3/5 lg:basis-[58%] xl:py-8 xl:px-16">
                <Fade bottom cascade>
                    <div className="text-green-2 text-xl my-auto space-y-5 lg:space-y-10 lg:text-[22px] xl:text-[28px] xl:leading-10 xl:space-y-14">
                        <h1 className="">Hi, I'm</h1>
                        <h1 className="text-green-1 text-4xl font-black drop-shadow-1 md:text-[44px] lg:text-[3.75rem] xl:text-[5rem]">Jacob Damasco.</h1>
                        <p className="">
                        I'm a <span className="text-green-3 hover:font-bold hover:cursor-default">software engineer</span> building customer facing tools with <span className="text-green-3 hover:font-bold hover:cursor-default">Java</span>. 
                        </p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                {/* links */}
                <div className="flex items-center justify-items-center xl:pt-8 xl:pb-4">
                    <div className="flex basis-[34%] items-center justify-center lg:basis-1/4">
                        <button className="text-base rounded-xl bg-green-4 text-green-2 px-4 py-1.5 hover:bg-green-3 hover:bg-opacity-40 hover:text-green-2 hover:font-bold md:mr-3 lg:py-[0.6rem] xl:px-[2rem]">
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                        </button>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex basis-[22%] items-center justify-center lg:basis-1/8">
                        <a href="https://www.linkedin.com/in/jrdamasco/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Jacob Damasco" className="w-8 lg:w-10"/>
                        </a>
                    </div>

                    {/* Github */}
                    <div className="flex basis-[22%] items-center justify-center lg:basis-1/8">
                        <a href="https://github.com/jacobdamasco" target="_blank" rel="noreferrer">
                            <img src={github} alt="Jacob Damasco" className="w-8 lg:w-10"/>   
                        </a>
                    </div>

                    {/* Mail */}
                    <div className="flex basis-[22%] items-center justify-center lg:basis-1/8">
                        <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">
                            <img src={mail} alt="Jacob Damasco" className="w-8 lg:w-10"/>  
                        </a>
                    </div>

                    <div className="lg:flex lg:basis-[37.5%]"></div>
                </div>
                </Fade>
            </div>

            {/* right */}
            <div className="flex justify-center items-center md:basis-2/5 lg:basis-[42%]">
                <Fade>
                <img src={jacob} alt="Jacob Damasco" className="rounded-xl lg:w-100 object-cover object-center lg:w-[24rem] xl:w-[28rem]"/>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default Hero;