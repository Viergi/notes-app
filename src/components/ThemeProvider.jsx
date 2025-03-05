import React, { useState, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  const ThemeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <div className="app-container" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
