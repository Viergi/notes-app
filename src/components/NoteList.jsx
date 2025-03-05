import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteList({ title, notesList }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <h2>{title}</h2>
      {notesList.length > 0 ? (
        <div className="notes-list">
          {notesList.map((note) => (
            <NoteItem
              key={note.id}
              noteTitle={note.title}
              noteBody={note.body}
              noteDate={note.createdAt}
              id={note.id}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">
          {locale == "id" ? "Tidak ada catatan" : "No Notes"}
        </p>
      )}
    </>
  );
}

const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

NoteList.propTypes = {
  title: PropTypes.string.isRequired,
  notesList: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteList;
