import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function DeleteButton({ onDelete, id }) {
  const { locale } = useContext(LocaleContext);
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      {locale == "id" ? "Hapus" : "Delete"}
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
