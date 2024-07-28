import Fade from 'react-reveal/Fade';

const ExperienceCard = ({ dates, company, title, description }) => {
    return (
    <>
    <div className="flex flex-col text-green-3 font-light px-8 md:hidden">
        <div className="text-[11px] pb-2">{dates}</div>
        <div className="text-green-2 text-xl font-bold">{company}</div>
        <div className="text-sm">{title}</div>
    </div>

    {/* non mobile screens */}
    <Fade bottom>
    <div className="hidden md:grid md:grid-cols-12 md:gap-y-0 md:px-24 md:pb-4 md:text-green-3 md:font-light lg:px-24 lg:gap-2">
        <div className="col-span-3 text-[11px] pb-2 lg:col-span-2 lg:text-sm">{dates}</div>
        <div className="col-span-9 pr-16 lg:col-span-10 lg:pr-0">
            <div className="text-green-1 text-xl font-bold lg:text-2xl">{company}</div>
            <div className="text-sm lg:text-base">{title}</div>
            <div className="text-green-2 text-opacity-75 text-xs mt-1.5 px-0 lg:text-base">{description}</div>
        </div>
    </div>
    </Fade> 
    </>
    )
}

export default ExperienceCard;