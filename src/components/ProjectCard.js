import Fade from 'react-reveal/Fade';
import ocr from '../assets/ocr.png'

const ProjectCard = ({title, description, buttonText}) => {
    return (
        <>
        {/* project 1 */}
        <Fade bottom>
        <div className="justify-center">
            {/* img container */}
            <div className="hidden md:flex">
                <img src={ocr} alt="OCR: Optical Character Recognition" className="h-30"/>
            </div>

            {/* description container */}
            <div className="">
            <div className="bg-green-6 bg-opacity-40 py-8 mx-10 rounded-xl space-y-4">
                <div className="flex flex-row justify-center">
                    <h1 className="text-green-3 text-[1.75rem] font-bold">{title}</h1>
                </div>
                <div className="flex flex-row">
                    <p className="text-green-2 px-10 text-center justify-center">{description}</p>
                </div>
                <div className="flex flex-row justify-center">
                    <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1">
                        <a href="" target="_blank" rel="noreferrer">{buttonText}</a>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </Fade>
        </>
    )
}

export default ProjectCard;