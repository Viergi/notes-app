import React, { useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data.js";
import { useNavigate, useParams } from "react-router-dom";
import NoteItemAction from "../components/NoteItemAction";
import { showFormattedDate } from "../utils";
import NotFoundPage from "./NotFoundPage";

function NotePage() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const response = await getNote(noteId);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (!note) return <NotFoundPage></NotFoundPage>;

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate("/");
  }

  async function unArchiveHandler(id) {
    await unarchiveNote(id);
    navigate("/");
  }

  return (
    <section className="note-page">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <h1>{note.title}</h1>
          <p>{showFormattedDate(note.createdAt)}</p>
          <div>{note.body}</div>
          <div className="note-page-action">
            <NoteItemAction
              archive={note.archived}
              id={noteId}
              onArchive={onArchiveHandler}
              onDelete={onDeleteHandler}
              unArchive={unArchiveHandler}
            ></NoteItemAction>
          </div>
        </>
      )}
    </section>
  );
}

export default NotePage;
