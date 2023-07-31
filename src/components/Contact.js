import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
    <>
    <Fade bottom cascade>
    <div id="contact" className="flex flex-col space-y-2 px-8 py-8 justify-center bg-gray-100 md:space-y-8 md:px-24 md:py-24 lg:space-y-10 lg:px-[15rem] lg:py-[14rem] xl:px-[28rem] xl:py-[10rem]">
        <div className="flex flex-row justify-center text-sm-contact drop-shadow-sm-name text-green-600 md:text-5xl lg:text-6xl">Let's get in touch!</div>
        <div className="flex flex-row justify-center text-center text-sm-contact-msg md:px-16 md:text-xl">I'm currently searching for a summer 2024 internship opportunity, so if you liked what you saw, send me a message and let's start a conversation!</div>
        <div className="flex flex-row justify-center">
            <button className="bg-green-600 text-center text-lg text-white px-[1.75rem] py-[0.6rem] md:mr-4 md:py-3 md:px-8 rounded-3xl md:text-xl">
                <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">Say Hi!</a>
            </button>
        </div>
    </div>
    </Fade>
    </>
    )
}

export default Contact;