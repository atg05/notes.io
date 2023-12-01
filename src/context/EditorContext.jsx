import * as React from "react";
import { generateUniqueId } from "../helpers/generateUniqueId";

export const EditorContext = React.createContext(); // You need to invoke React.createContext()

const EditorProvider = ({ children }) => {
  const [editor, setEditor] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [canSave, setCanSave] = React.useState(false);

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleCanSave = (status) => {
    setCanSave(status);
  };

  const addToEditor = (id, type, content) => {
    let newContent = {
      order: Object.keys(editor)?.length + 1,
      type,
      content,
    };
    setEditor((editor) => {
      return { ...editor, [id]: newContent };
    });
  };

  const deleteFromEditor = (contentId) => {
    const updatedEditorContent = { ...editor };
    delete updatedEditorContent[contentId];
    setEditor(updatedEditorContent);
  };

  const saveContent = () => {
    let storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      let _storedNotes = JSON.parse(storedNotes);
      _storedNotes.push({
        title,
        id: generateUniqueId(),
        timeStamp: Math.floor(new Date().getTime() / 1000),
        editor,
      });

      localStorage.setItem("notes", JSON.stringify(_storedNotes));
    } else
      localStorage.setItem(
        "notes",
        JSON.stringify([
          {
            title,
            id: generateUniqueId(),
            timeStamp: Math.floor(new Date().getTime() / 1000),
            editor,
          },
        ])
      );
  };

  return (
    <EditorContext.Provider
      value={{
        editor,
        canSave,
        title,
        handleCanSave, // Uncommented this line
        handleTitleChange, // Uncommented this line
        saveContent, // Uncommented this line
        addToEditor, // Uncommented this line
        deleteFromEditor, // Uncommented this line
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
