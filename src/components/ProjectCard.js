import Fade from 'react-reveal/Fade';

const ProjectCard = ({imgSide, img, altText, title, description, buttonText}) => {
    if (imgSide === 'left') {
        return (
            <>
            {/* project 1 */}
            <Fade bottom>
            <div className="md:grid md:grid-cols-12 md:gap-4 lg:gap-5">
                {/* img container */}
                <div className="hidden text-green-2 md:flex md:col-span-6">
                    <img src={img} alt={altText} className={altText === 'Productiv' ? "rounded-md md:object-cover" : "rounded-md md:object-left md:object-cover drop-shadow-3" }/>
                </div>
    
                {/* description container */}
                <div className="md:grid md:col-span-6">
                <div className="bg-green-6 bg-opacity-30 py-8 rounded-xl space-y-4 lg:space-y-8">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-green-3 text-xl font-bold lg:text-2xl">{title}</h1>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-green-2 px-10 text-center justify-center lg:text-base">{description}</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1 lg:px-6 lg:py-2">
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
    else {
        return (
            <>
            {/* project 1 */}
            <Fade bottom>
            <div className="md:grid md:grid-cols-12 md:gap-4">
                {/* description container */}
                <div className="md:grid md:col-span-6">
                <div className="bg-green-6 bg-opacity-30 py-8 rounded-xl space-y-4 lg:space-y-8">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-green-3 text-xl font-bold lg:text-2xl">{title}</h1>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-green-2 px-10 text-center justify-center lg:text-base">{description}</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <button className="bg-green-600 text-white rounded-xl text-center px-3 py-1 lg:px-6 lg:py-2">
                            <a href="" target="_blank" rel="noreferrer">{buttonText}</a>
                        </button>
                    </div>
                </div>
                </div>

                {/* img container */}
                <div className="hidden text-green-2 md:flex md:col-span-6">
                    <img src={img} alt={altText} className={altText === 'Productiv' ? "rounded-md md:object-cover" : "rounded-md md:object-left md:object-cover drop-shadow-3" }/>
                </div>
            </div>
            </Fade>
            </>
        )
    }
}

export default ProjectCard;