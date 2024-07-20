import Fade from 'react-reveal/Fade';
import ExperienceCard from './ExperienceCard';

const Experiences = ({}) => {
    return (
    <>
    <div id="experiences" className="flex flex-col bg-green-6 px-4 py-4">
        <Fade bottom>
        <div className="flex flex-row text-green-1 text-3xl font-black p-4 md:px-12 md:pt-4">Where I've Worked</div>
        </Fade>
        <div className="flex flex-col space-y-6 py-4 md:grid md:py-0">
            <ExperienceCard 
                dates="May 2024 - Current" 
                company="LACERA" 
                title="Software Engineer Intern"
                description="Developed robust test automation scripts for application monitoring tools using TypeScript, JavaScript, Node.js, and Microsoft Playwright, reducing manual end-to-end testing time by over 40 hours per month. Automated dynamic email and text message confirmations for two-factor authentication and account activity notifications for 188,000+ registered LACERA members via the Twilio and SendGrid APIs."
            />
            <ExperienceCard 
                dates="May - Aug 2023" 
                company="Hexfork" 
                title="Software Development Intern"
                description="Designed 5+ responsive React.js components, including navbars and dropdowns, into Hexfork's website, resulting in a 20% increase in website engagement. Reduced page load times by 50% by implementing client-side routing with Node.js."
            />
            <ExperienceCard 
                dates="Aug 2022 - May 2023" 
                company="TeraThought" 
                title="Software Engineer Intern (Android)"
                description="Constructed 3+ widgets with Kotlin and Android's Jetpack Compose for a new mobile app, Shareful. Collaborated with an agile team of 4 UX designers and 1 project manager to decrease design-to-code conversion time by 2 days."
            />
            <ExperienceCard 
                dates="Aug 2020 - May 2022" 
                company="University of San Francisco" 
                title="Physics Teaching Assistant"
                description="Conducted office hours for a class of 100+ students to help them with physics assignments & exam preparation. Enhanced students' problem-solving skills by using different explanations & visualizing problems step-by-step with diagrams, resulting in exam scores that exceeded the 80% class average."
            />
        </div>
    </div>
    </>
    )
}

export default Experiences;