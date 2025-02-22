import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
    <>
    <div id="contact" className="flex flex-col justify-center space-y-4 py-12 bg-green-6 md:space-y-8 md:px-24 md:py-24">
    <Fade bottom cascade>
        <div className="space-y-4 md:space-y-8 lg:px-20">
            <div className="flex flex-row justify-center text-center text-[32px] text-green-3 font-black drop-shadow-2 md:text-[44px] lg:text-[3.5rem]">Let's get in touch!</div>
            <div className="flex flex-row justify-center px-16 text-center text-sm text-green-2 md:text-[17px] lg:px-40 lg:text-[18px] lg:leading-6 xl:text-[16px] xl:px-80">I'm on the lookout for new grad software engineering roles, so if you liked what you saw, feel free to send me a message below.</div>
            <div className="flex flex-row justify-center text-green-3 pt-2">
                <button className="bg-green-4 px-8 py-2 rounded-xl hover:font-bold hover:bg-green-3 hover:text-green-1 hover:bg-opacity-40 lg:text-[18px]">
                    <a href="mailto:damasco@usc.edu" target="_blank" rel="noreferrer">Say Hi</a>
                </button>
            </div>
        </div>
    </Fade>
    </div>
    </>
    )
}

export default Contact;