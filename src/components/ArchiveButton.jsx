import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function ArchiveButton({ archive, onArchive, id, unArchive }) {
  const { locale } = useContext(LocaleContext);
  return (
    <button
      className="note-item__archive-button"
      onClick={archive ? () => unArchive(id) : () => onArchive(id)}
    >
      {archive
        ? locale == "id"
          ? "Pindahkan"
          : "Move it"
        : locale == "id"
        ? "Arsipkan"
        : "Archive"}
    </button>
  );
}

ArchiveButton.propTypes = {
  archive: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  unArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ArchiveButton;
