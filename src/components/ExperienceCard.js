import Fade from 'react-reveal/Fade';

const ExperienceCard = ({ dates, company, title}) => {
    return (
    <>
    <div className="flex flex-col text-green-3 font-light px-8">
        <div className="text-[11px] pb-2">{dates}</div>
        <div className="text-green-2 text-xl font-bold">{company}</div>
        <div className="text-sm">{title}</div>
    </div>
    </>
    )
}

export default ExperienceCard;