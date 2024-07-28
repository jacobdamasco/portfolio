import { useState } from "react";
import { Link } from "react-scroll";

import jdLogo from "../assets/icons/jd-dark.png";

const Navbar = () => {
    // state where dropdown is bool
    // false if closed, true if open
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleNavClick = () => {
        setDropdown(currentState => !currentState);
    }

    const close = () => setClick(false);

    return (
        <>
        <div className="bg-green-7 flex flex-row max-w-screen p-4 text-[14.5px]">
            {/* logo */}
            <div className="flex basis-[20%] justify-center md:basis-[10%]">
                <Link to="/" spy={true} smooth={true} offset={1} duration={1000}></Link>
                <img className="rounded" src={jdLogo} alt="JD Logo" width="35" height="35"></img>
            </div> 

            {/* filler space */}
            <div className="basis-[80%] md:basis-[54%]"></div>

            {/* dropdown navbar w hamburger icon */}
            <div className="basis-[10%] justify-center md:hidden" onClick={() => handleNavClick()}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 25 25" width="35" height="35" xmlns="http://www.w3.org/2000/svg" fill="#daf1de"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg></div>

            {/* navbar, right side */}
            <div className="hidden md:flex md:basis-[12%] md:justify-center md:items-center md:text-green-1 xl:text-base">
                <Link to="about" spy={true} smooth={true} offset={1} duration={1000}><ul className="show-cursor nav-elem hover:font-black">About</ul></Link>
            </div>
            <div className="hidden md:flex md:basis-[12%] md:justify-center md:items-center md:text-green-1 xl:text-base">
                <Link to="projects" spy={true} smooth={true} offset={1} duration={1000}><ul className="show-cursor nav-elem hover:font-black">Projects</ul></Link>
            </div>
            <div className="hidden md:flex md:basis-[12%] md:justify-center md:items-center md:text-green-1 xl:text-base">
                <Link to="contact" spy={true} smooth={true} offset={1} duration={1000} onClick={close}><ul className="show-cursor nav-elem hover:font-black">Contact</ul></Link>
            </div>
        </div>

        {/* navbar dropdown for mobile */}
        <div className={(dropdown ? "dropdown-active dropdown-container " : "dropdown ") + "bg-green-5 flex flex-col md:hidden"}>
            <div className={(dropdown ? "dropdown-active " : "dropdown ") + "flex flex-row items-center text-base text-green-2 px-8"}>
                <ul className="flex flex-col basis-[100%] justify-center space-y-[1rem] md:hidden">
                    <li className="flex flex-row hover:font-black hover:cursor-pointer"><Link to="about" spy={true} smooth={true} offset={1} duration={1000}>About</Link></li>
                    <li className="flex flex-row hover:font-black hover:cursor-pointer"><Link to="projects" spy={true} smooth={true} offset={1} duration={1000}>Projects</Link></li>
                    <li className="flex flex-row hover:font-black hover:cursor-pointer"><Link to="contact" spy={true} smooth={true} offset={1} duration={1000}>Contact</Link></li>
                </ul>
            </div>
        </div>
      </>
    );
}

export default Navbar;