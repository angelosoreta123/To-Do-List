import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  return (
    <nav className="max-w-7xl flex justify-between mx-auto items-center text-white pt-4 px-4 cursor-pointer">
      <h1 className="font-bold text-2xl">{"<MASS/>"}</h1>

      <div className="md:hidden">
        {" "}
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      {isOpen && (
        <ul className="flex gap-6 flex-col items-center absolute top-20 right-0 mr-5 border border-white p-10 rounded-md md:hidden bg-black">
          <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
            Home
          </li>
          <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
            Skills
          </li>
          <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
            Projects
          </li>
          <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
            Contact
          </li>
          {lightMode ? (
            <li onClick={() => setLightMode(false)}>
              <FaMoon size={20} />
            </li>
          ) : (
            <li onClick={() => setLightMode(true)}>
              <FaSun size={20} color="white" />
            </li>
          )}
        </ul>
      )}
      <ul className="hidden md:flex gap-6 items-center">
        <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
          Home
        </li>
        <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
          Skills
        </li>
        <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
          Projects
        </li>
        <li className="hover:bg-white hover:text-black rounded-md px-3 py-2">
          Contact
        </li>
        {lightMode ? (
          <li onClick={() => setLightMode(false)}>
            <FaMoon size={20} />
          </li>
        ) : (
          <li onClick={() => setLightMode(true)}>
            <FaSun size={20} color="white" />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
