const Navbar = () => {
    return (
        <>
        <div className="flex flex-row max-w-screen p-4">
            <div className="basis-1/12 justify-center text-center text-lg"><ul className="font-bold">JD</ul></div>
            <div className="basis-2/3"></div>
            <div className="basis-1/12 justify-center text-center text-lg"><ul>About</ul></div>
            <div className="basis-1/12 justify-center text-center text-lg"><ul>Projects</ul></div>
            <div className="basis-1/12 justify-center text-center text-lg"><ul>Contact</ul></div>
        </div>
      </>
    );
}

export default Navbar;