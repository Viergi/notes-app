import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ArchivesPage from "./pages/ArchivesPage";
import NotePage from "./pages/NotePage";
import NoteAppHeader from "./components/NoteAppHeader";
import NewNotePage from "./pages/NewNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ThemeProvider from "./components/ThemeProvider";
import LocaleProvider from "./components/LocaleProvider";
import { getUserLogged, login, putAccessToken } from "./utils/network-data";

function App() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthUser(data);
      } catch (error) {
        console.error("Error");
      }
    };
    getUser();
  }, []);

  const onLogoutHandler = async () => {
    setAuthUser(null);
    putAccessToken("");
    navigate("/login");
  };

  const onLoginHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
    navigate("/");
  };

  if (!authUser) {
    return (
      <>
        <ThemeProvider>
          <LocaleProvider>
            <NoteAppHeader user={authUser} onLogout={onLogoutHandler} />
            <Routes>
              <Route
                path="/*"
                element={<LoginPage onLogin={onLoginHandler} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </LocaleProvider>
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <ThemeProvider>
        <LocaleProvider>
          <NoteAppHeader user={authUser} onLogout={onLogoutHandler} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/notes/new" element={<NewNotePage />} />
            <Route path="/notes/:noteId" element={<NotePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
