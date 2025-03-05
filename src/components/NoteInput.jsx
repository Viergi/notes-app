import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { addNote } from "../utils/network-data.js";

function NoteInput() {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  function onSubmitEventHandler(event) {
    event.preventDefault();
    const [title, body] = [event.target.judul.value, event.target.body.value];
    addNote({ title, body });
    navigate("/");
  }

  return (
    <div className="note-input">
      <h2>{locale == "id" ? "Buat Catatan" : "Create Note"}</h2>
      <form onSubmit={onSubmitEventHandler}>
        <input
          type="text"
          className="note-input__title"
          placeholder={locale == "id" ? "Ini adalah judul ..." : "Input Title"}
          required
          name="judul"
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder={
            locale == "id" ? "Tuliskan catatanmu di sini ..." : "Write Here"
          }
          required
          name="body"
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteInput;
