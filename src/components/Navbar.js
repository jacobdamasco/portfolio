const Navbar = () => {
    return (
        <>
        <div className="flex flex-row max-w-screen p-4">
            {/* logo */}
            <div className="basis-[10%] justify-center text-center text-lg"><ul className="font-bold">JD</ul></div>

            {/* filler space */}
            <div className="basis-[80%] md:basis-[60%]"></div>

            {/* dropdown navbar w hamburger icon */}
            <div className="basis-[10%] justify-center md:hidden"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 25 25" width="35" height="35" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg></div>

            {/* navbar, right side */}
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4"><ul>About</ul></div>
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4"><ul>Projects</ul></div>
            <div className="hidden md:flex basis-[10%] justify-center text-center text-lg px-4"><ul>Contact</ul></div>
        </div>
      </>
    );
}

export default Navbar;