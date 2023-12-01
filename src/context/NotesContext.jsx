import { createContext, useState } from "react";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState({});

  const setNotes = (data) => {
    setAllNotes((state) => data);
  };

  return (
    <NotesContext.Provider value={{ allNotes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
