import React, { useState, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "id";
  });

  useEffect(() => {
    localStorage.setItem("language", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);
  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LocaleProvider;
