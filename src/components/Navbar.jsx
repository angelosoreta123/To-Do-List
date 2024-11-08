import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const sections = {
    Home: "home-section",
    Skills: "skills-section",
    Projects: "projects-section",
    Contact: "contact-section",
  };

  // Set class for the navbar based on scroll status
  const navClassName = hasScrolled
    ? "text-lightMint bg-darkSlateGreen cursor-pointer fixed top-0 z-50 px-6 py-4 border-4 border-deepCyan rounded-full w-full mt-4" 
    : "text-lightMint bg-darkSlateGreen cursor-pointer fixed top-0 z-50 px-6 py-4 w-full"; 

  // Function to handle scroll to section
  const handleScroll = (section) => {
    const element = document.getElementById(sections[section]);
    if (element) {
      const yOffset = -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  // Handle scroll event to detect if the page is scrolled
  const handleScrollEvent = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true); // Set the state when scrolled
    } else {
      setHasScrolled(false); // Reset state when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);


  return (
    <nav className={navClassName}>
      <div className="max-w-7xl flex justify-between mx-auto items-center">
        <a href="/"><h1 className="text-2xl font-semibold ">{"<MASS/>"}</h1></a>

        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            aria-label="Toggle navigation menu"
          />
        </div>

        {isOpen && (
          <ul className="flex gap-6 flex-col items-center absolute top-24 right-4 mr-5 border-4 text-lightMint border-deepCyan p-10 rounded-md md:hidden bg-darkSlateGreen font-semibold">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} onClick={() => handleScroll(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden md:flex gap-6 items-center font-semibold">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} onClick={() => handleScroll(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
