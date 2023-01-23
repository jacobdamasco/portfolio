import { useState } from "react";
import { Link } from "react-scroll";

import jdLogo from "../assets/icons/jd-white.png";

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
        <div className="flex flex-row max-w-screen p-4">
            {/* logo */}
            <div className="flex basis-[10%] justify-center text-center text-lg">
                <Link to="/" spy={true} smooth={true} offset={1} duration={1000}></Link>
                <img src={jdLogo} alt="JD Logo" width="35" height="35"></img>
            </div> 

            {/* filler space */}
            <div className="basis-[80%] md:basis-[60%]"></div>

            {/* dropdown navbar w hamburger icon */}
            <div className="basis-[10%] justify-center md:hidden" onClick={() => handleNavClick()}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 25 25" width="35" height="35" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg></div>

            {/* navbar, right side */}
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4">
                <Link to="about" spy={true} smooth={true} offset={1} duration={1000}><ul className="show-cursor nav-elem">About</ul></Link>
            </div>
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4">
                <Link to="projects" spy={true} smooth={true} offset={1} duration={1000}><ul className="show-cursor nav-elem">Projects</ul></Link>
            </div>
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4">
                <Link to="contact" spy={true} smooth={true} offset={1} duration={1000} onClick={close}><ul className="show-cursor nav-elem">Contact</ul></Link>
            </div>
        </div>

        {/* navbar dropdown for mobile */}
        <div className={(dropdown ? "dropdown-active dropdown-container " : "dropdown ") + "bg-gray-100 flex flex-col md:hidden"}>
            <div className={(dropdown ? "dropdown-active " : "dropdown ") + "flex flex-row items-center"}>
                <ul className="flex flex-col basis-[100%] justify-center my-auto py-auto text-lg space-y-[12px] md:hidden">
                    <li className="flex flex-row px-4 active:bg-gray-200"><Link to="about" spy={true} smooth={true} offset={1} duration={1000}>About</Link></li>
                    <li className="flex flex-row px-4 active:bg-gray-200"><Link to="about" spy={true} smooth={true} offset={1} duration={1000}>Projects</Link></li>
                    <li className="flex flex-row px-4 active:bg-gray-200"><Link to="about" spy={true} smooth={true} offset={1} duration={1000}>Contact</Link></li>
                </ul>
            </div>
        </div>
      </>
    );
}

export default Navbar;