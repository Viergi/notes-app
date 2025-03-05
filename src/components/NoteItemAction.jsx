import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from "prop-types";

function NoteItemAction({ onDelete, id, archive, onArchive, unArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton onDelete={onDelete} id={id} />
      <ArchiveButton
        onArchive={onArchive}
        id={id}
        archive={archive}
        unArchive={unArchive}
      />
    </div>
  );
}

NoteItemAction.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  unArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  archive: PropTypes.bool.isRequired,
};

export default NoteItemAction;
