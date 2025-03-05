import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="toggle_button" onClick={toggleTheme} data-theme={theme}>
      {theme == "dark" ? <FiSun></FiSun> : <FiMoon></FiMoon>}
    </button>
  );
}
