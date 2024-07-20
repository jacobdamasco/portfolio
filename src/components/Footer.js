const Footer = () => {
    return (
    <>
        <div className="flex flex-col justify-center py-8 bg-green-7 text-green-2 text-xs md:text-sm">
            <div className="flex flex-row justify-center">Designed & developed by</div>
            <div className="flex flex-row justify-center">Jacob Damasco.</div>
            <div className="flex flex-row justify-center pt-6">2024.</div>
            <a href="https://github.com/jacobdamasco/portfolio" className="flex flex-row justify-center footer-link text-green-3" target="_blank" rel="noreferrer">Github</a>
        </div>
    </>
    )
}

export default Footer;