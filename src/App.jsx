import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState, createContext, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export const ThemeContext = createContext(null);

const App = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const iconToShow = () => {
    if (theme === "dark") return <FaSun color="white" size={20} />;
    else return <FaMoon color="white" size={20} />;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-dvh w-full flex flex-col items-center" id={theme}>
        <Header onClick={toggleTheme}>{iconToShow()}</Header>
        <TodoList />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
