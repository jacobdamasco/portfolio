import Fade from 'react-reveal/Fade';

const ExperienceCard = ({ dates, company, title}) => {
    return (
    <>
    <div className="text-green-3 font-light px-8">
        <p className="text-xs pb-2">{dates}</p>
        <p className="text-green-2 text-2xl font-bold">{company}</p>
        <p className="">{title}</p>
    </div>
    </>
    )
}

export default ExperienceCard;