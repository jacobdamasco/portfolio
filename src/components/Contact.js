import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
    <>
    <Fade bottom cascade>
    <div id="contact" className="flex flex-col justify-center space-y-8 py-12 bg-green-6 md:space-y-8 md:px-24 md:py-24 lg:space-y-10 lg:px-[15rem] lg:py-[14rem] xl:px-[28rem] xl:py-[10rem]">
        <div className="flex flex-row justify-center px-10 text-center text-4xl text-green-3 font-extrabold">Let's get in touch!</div>
        <div className="flex flex-row justify-center px-16 text-center text-base text-green-2">I'm on the lookout for new grad software engineering roles, so if you liked what you saw, feel free to send me a message below.</div>
        <div className="flex flex-row justify-center text-green-3">
            <button className="bg-green-4 px-8 py-2 rounded-xl hover:font-extrabold hover:bg-green-3 hover:text-green-1 hover:bg-opacity-40">
                <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">Say Hi</a>
            </button>
        </div>
    </div>
    </Fade>
    </>
    )
}

export default Contact;