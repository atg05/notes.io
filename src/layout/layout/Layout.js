import React, { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { NotesContext } from "../../context/NotesContext";
import { Text } from "../../constants/editor";
import { useLocation } from "react-router-dom";
import "./layout.style.css";

const Layout = () => {
  const location = useLocation();
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
    <div
      className={
        location.pathname === "/" ? "layout bg-grey" : "layout bg-white"
      }
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
