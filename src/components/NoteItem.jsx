import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NoteItem({ noteTitle, noteBody, noteDate, id }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <Link to={`/notes/${id}`} className="note-item__title">
          {noteTitle}
        </Link>
        <p className="note-item__date">{showFormattedDate(noteDate)}</p>
        <p className="note-item__body">{noteBody}</p>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  noteBody: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
