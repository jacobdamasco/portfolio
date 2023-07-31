import Fade from 'react-reveal/Fade';
import ffBabyShower from '../assets/ff_baby_shower.png'
import ocr from '../assets/ocr.png'
import grocerup from '../assets/grocerup.png'

const Projects = () => {
    return (
    <>
    <div id="projects" className="md:flex md:flex-col py-8 md:px-16 md:py-8 xl:py-10 bg-gray-50">
        <div className="flex flex-row px-8 pb-4 text-subheader text-green-600 font-semibold md:px-4 md:text-3xl md:pb-8 lg:pb-12">Projects</div>

        {/* project container */}
        <div className="space-y-8 md:space-y-12 md:px-16 lg:space-y-16 lg:px-0 xl:px-20 xl:space-y-20"> 
            {/* project 1 */}
            <Fade bottom>
            <div className="md: md:rounded-xl lg:flex lg:flex-row lg:px-4 justify-center">
                {/* img container */}
                <div className="hidden md:flex lg:flex-col lg:basis-[45%]">
                    <img src={ocr} alt="OCR: Optical Character Recognition" className="h-full object-cover object-left lg:shadow-2xl lg:shadow-gray-600"/>
                </div>

                {/* description container */}
                <div className="lg:flex lg:flex-col lg:basis-[55%]">
                <div className="bg-green-50 py-8 mx-10 rounded-xl md:rounded-none lg:rounded-xl space-y-2 md:mx-0 lg:ml-8">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-xl text-green-600 font-semibold text-center md:text-2xl">OCR: Optical Character Recognition</h1>
                    </div>
                    <div className="flex flex-row">
                        <p className="px-10 text-center justify-center lg:px-20 lg:text-lg">A C++ program that recognizes two numbers from two bmp files and adds or subtracts the numbers. All developed without the use of machine learning libraries! Instead, I used different mathematical techniques to determine digits, like Euler number, center of mass, & symmetry.</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1 mt-2 md:px-4 md:py-2 md:rounded-lg">
                            <a href="https://gitfront.io/r/jacobdamasco/QHAiSy7wLSX7/ocr-optical-character-recognition/" target="_blank" rel="noreferrer">View on Github</a>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </Fade>

            {/* project 2 */}
            <Fade bottom>
            <div className="md:rounded-xl lg:flex lg:flex-row lg:px-4 justify-center">
                {/* img container */}
                <div className="hidden md:flex lg:hidden lg:flex-col lg:basis-[45%]">
                    <img src={ffBabyShower} alt="Family Feud: Baby Shower" className="h-full object-cover object-center lg:shadow-2xl lg:shadow-gray-600"/>
                </div>

                {/* description container */}
                <div className="lg:flex lg:flex-col lg:basis-[55%]">
                <div className="bg-green-50 py-8 mx-10 rounded-xl md:rounded-none lg:rounded-xl space-y-2 md:mx-0 lg:mr-8">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-xl text-green-600 font-semibold text-center md:text-2xl">Family Feud: Baby Shower</h1>
                    </div>
                    <div className="flex flex-row">
                        <p className="px-10 text-center justify-center lg:px-20 lg:text-lg">A game based off the popular TV game show Family Feud, except for my cousin's baby shower. Fully equipped with music, sound effects, and proper scoring. Play it with your family! When I pulled this up, little did I know that the two teams would go wild for it.</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1 mt-2 md:px-4 md:py-2 md:rounded-lg">
                            <a href="https://github.com/jacobdamasco/family-feud-baby-shower" target="_blank" rel="noreferrer">View on Github</a>
                        </button>
                    </div>
                </div>
                </div>

                {/* img container */}
                <div className="hidden md:hidden lg:flex lg:flex-col lg:basis-[45%]">
                    <img src={ffBabyShower} alt="OCR: Optical Character Recognition" className="h-full object-cover object-center lg:shadow-2xl lg:shadow-gray-600"/>
                </div>
            </div>
            </Fade>

            {/* project 3 */}
            <Fade bottom>
            <div className="md: md:rounded-xl lg:flex lg:flex-row lg:px-4 justify-center">
                {/* img container */}
                <div className="hidden md:flex lg:flex-col lg:basis-[45%]">
                    <img src={grocerup} alt="Grocerup" className="h-full object-cover object-center lg:shadow-2xl lg:shadow-gray-600"/>
                </div>

                {/* description container */}
                <div className="lg:flex lg:flex-col lg:basis-[55%]">
                <div className="bg-green-50 py-8 mx-10 rounded-xl md:rounded-none lg:rounded-xl space-y-2 md:mx-0 lg:ml-8">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-xl text-green-600 font-semibold text-center md:text-2xl">Grocerup</h1>
                    </div>
                    <div className="flex flex-row">
                        <p className="px-10 text-center justify-center lg:px-20 lg:text-lg">A web app where you can manage your fridge, pantry, & cupboard inventory and plan your next grocery trip. With a personal account, you can easily manage your grocery lists. Organize them by store, by produce, or just how you like it.</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1 mt-2 md:px-4 md:py-2 md:rounded-lg">
                            <a href="https://github.com/jacobdamasco/grocerup" target="_blank" rel="noreferrer">View on Github</a>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </Fade>

        </div>
    </div>
    </>
    )
}

export default Projects;