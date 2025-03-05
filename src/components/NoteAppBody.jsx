import React, { useContext } from "react";
import NoteList from "./NoteList";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteAppBody({ archive, notes }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="note-app__body">
      <NoteList
        title={
          archive
            ? locale == "id"
              ? "Catatan Arsip"
              : "Note Archived"
            : locale == "id"
            ? "Catatan Aktif"
            : "Active Note"
        }
        notesList={notes}
      />
    </div>
  );
}

const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

NoteAppBody.propTypes = {
  archive: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteAppBody;
