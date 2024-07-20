import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
        <div id="about" className="flex flex-col bg-green-5 placeholder:max-w-fit px-4 py-8 space-y-2">
            <Fade bottom>
            <div className="flex flex-row text-green-1 text-3xl font-black p-4 md:px-12">About</div>
            </Fade>
            <div className="px-8 pb-10 space-y-4 text-green-2 text-sm md:px-24 md:text-[14.5px]">
                <Fade bottom>
                <p className="flex flex-row">
                    Hi! My name is Jacob and I love all things tech. I grew up being surrounded by tech and loved being around it so much that I’ve become a software engineer!
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row">
                    I’m currently at USC studying computer science and engineering. Prior to USC, I graduated with a B.S. in Physics from the University of San Francisco. Some of the new technologies I've picked up recently:
                </p>
                <p className="flex flex-row">
                    Some of the new technologies I've picked up recently:
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row px-4 text-green-3 font-semibold drop-shadow-lg">
                    {'>'} TypeScript, Playwright, React Native, Spring Boot, Next.js {'<'}
                </p>
                </Fade>
                <Fade bottom>
                <p className="flex flex-row">
                    Putting tech aside, I enjoy cooking new dishes and exploring new adventure spots. It won't be hard to find me exploring some good boba shops or coffee shops around the Bay Area or LA or traveling during summer break.
                </p>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default About;