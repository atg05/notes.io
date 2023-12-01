import React, { useContext, useEffect } from "react";
import { NotesContext } from "../../context/NotesContext";
import Card from "../../components/card/Card";
import "./Notes.style.css";

const Notes = () => {
  const { allNotes, setNotes } = useContext(NotesContext);
  function fetchAllNotes() {
    // fetching all notes
    const localStorageKeys = Object.keys(localStorage) || [];

    let _allNotes;
    localStorageKeys?.forEach((key) => {
      const value = localStorage.getItem(key);
      const _parsedValue = JSON.parse(value);
      const _firstTextContent = Object.keys(_parsedValue.editor)?.map((key) => {
        if (_parsedValue.editor[key].type === Text)
          return _parsedValue.editor[key].content;
      });

      _allNotes = {
        ..._allNotes,
        [key]: {
          ..._parsedValue,
          desc: _firstTextContent[0] || "Contains Media File",
        },
      };
    });
    setNotes(_allNotes);
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="notes-collection">
      {allNotes &&
        Object.keys(allNotes)?.map((key) => {
          const { ...noteData } = allNotes[key];

          return <Card key={noteData.id} card={noteData} />;
        })}
    </div>
  );
};

export default Notes;
