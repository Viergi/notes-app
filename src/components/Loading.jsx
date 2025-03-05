import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

export default function Loading() {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`loading ${theme}`}>
      {locale == "id" ? "Memuat..." : "Loading..."}
    </div>
  );
}
