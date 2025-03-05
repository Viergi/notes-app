import React, { useEffect, useState } from "react";
import NoteAppBody from "../components/NoteAppBody";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import Loading from "../components/Loading";

function ArchivesPage() {
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
        const response = await getArchivedNotes();
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
        <NoteAppBody archive={true} notes={filteredNotes} />
      )}
    </>
  );
}

export default ArchivesPage;
