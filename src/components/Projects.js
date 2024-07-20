import Fade from 'react-reveal/Fade';
import ffBabyShower from '../assets/ff_baby_shower.png'
import ocr from '../assets/ocr.png'
import grocerup from '../assets/grocerup.png'
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
    <>
    <div id="projects" className="flex flex-col bg-green-6 px-4 py-4">
        <div className="flex flex-row text-green-1 text-3xl font-black px-4 py-8">Projects</div>

        {/* project container */}
        <div className="space-y-8 md:space-y-12 md:px-16 lg:space-y-16 lg:px-0 xl:px-20 xl:space-y-20"> 
            <ProjectCard 
                title="Productiv"
                description="A full-stack task management app that lets you collaborate on tasks with other users and integrates them with your Google Calendar."
                buttonText="Demo"
            />
            <ProjectCard 
                title="OCR"
                description="OCR, or Optical Character Recognition, is a C++ program that recognizes two numbers from two bmp files and adds or subtracts the numbers without using machine learning libraries."
                buttonText="Github"
            />
            <ProjectCard 
                title="Grocerup"
                description="A web app where you can manage your fridge and pantry inventory and plan your next grocery trip."
                buttonText="Github"
            />
        </div>
    </div>
    </>
    )
}

export default Projects;