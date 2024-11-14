import { useContext } from "react";
import { ThemeContext } from "../App"; 

const Header = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext); 

  return (
    <header
      className={`h-[200px] w-full flex justify-center px-7 ${
        theme === "dark" ? "bg-desktopDarkBg" : "bg-desktopLightBg"
      } bg-no-repeat bg-cover`}
    >
      <div className="flex items-center justify-between max-w-3xl w-full">
        <h1 className="text-3xl text-veryLightGray font-bold">T O D O</h1>
        <button onClick={onClick}>{children}</button>
      </div>
    </header>
  );
};

export default Header;
