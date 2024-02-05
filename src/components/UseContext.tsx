import React, { useContext } from "react";
import { ThemeContext } from "../App.tsx";

const UseContextExample = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <h2>useContext</h2>

      <p>The current theme is {isDarkMode ? "dark" : "light"}.</p>

      <p>Toggle the theme</p>
      <button onClick={toggleTheme}>
        Change to {isDarkMode ? "light" : "dark"}
      </button>
    </>
  );
};

export default UseContextExample;
