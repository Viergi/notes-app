import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import LocaleButton from "./LocaleButton";
import ThemeButton from "./ThemeButton";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function NoteAppHeader({ user, onLogout }) {
  const { pathname } = useLocation();
  const { locale } = useContext(LocaleContext);

  if (!user) {
    return (
      <div className="note-app__header">
        <h1>{locale == "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
        <div>
          <LocaleButton></LocaleButton>
          <ThemeButton></ThemeButton>
        </div>
      </div>
    );
  }

  return (
    <div className="note-app__header">
      <h1>{locale == "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
      <div>
        {user && (
          <Link to={pathname == "/" ? "/archives" : "/"}>
            {pathname == "/"
              ? locale == "id"
                ? "Arsip"
                : "Archive"
              : locale == "id"
              ? "Kembali"
              : "Back"}
          </Link>
        )}
        <LocaleButton></LocaleButton>
        <ThemeButton></ThemeButton>
        {user && <Logout name={user.name} onLogout={onLogout} />}
      </div>
    </div>
  );
}

NoteAppHeader.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default NoteAppHeader;
