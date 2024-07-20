import Fade from 'react-reveal/Fade';
import ExperienceCard from './ExperienceCard';

const Experiences = ({}) => {
    return (
    <>
    <div id="experiences" className="flex flex-col bg-green-6 px-4 py-4">
        <Fade bottom>
        <div className="flex flex-row text-green-1 text-3xl font-black p-4">Where I've Worked</div>
        </Fade>
        <div className="flex flex-col space-y-6 py-4">
            <ExperienceCard 
                dates="May 2024 - Current" 
                company="LACERA" 
                title="Software Engineer Intern"
            />
            <ExperienceCard 
                dates="May - Aug 2023" 
                company="Hexfork" 
                title="Software Development Intern"
            />
            <ExperienceCard 
                dates="Aug 2022 - May 2023" 
                company="TeraThought" 
                title="Software Engineer Intern (Android)"
            />
            <ExperienceCard 
                dates="Aug 2020 - May 2022" 
                company="University of San Francisco" 
                title="Physics Teaching Assistant"
            />
        </div>
    </div>
    </>
    )
}

export default Experiences;