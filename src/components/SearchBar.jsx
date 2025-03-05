import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder={locale == "id" ? "Cari Catatan" : "Search Note"}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      ></input>
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
