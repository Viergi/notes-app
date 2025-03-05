import React, { useContext, useEffect, useState } from "react";
import NoteAppBody from "../components/NoteAppBody";
import { getActiveNotes } from "../utils/network-data.js";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading.jsx";
import LocaleContext from "../contexts/LocaleContext.js";

function HomePage() {
  const { locale } = useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const response = await getActiveNotes();
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {isLoading ? (
        <Loading />
      ) : (
        <NoteAppBody archive={false} notes={filteredNotes} />
      )}
      <Link to={"/notes/new"} className="add_button">
        {locale == "id" ? "Tambah Catatan +" : "Add Note +"}
      </Link>
    </>
  );
}

export default HomePage;
