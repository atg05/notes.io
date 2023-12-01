import * as React from "react";
import { generateUniqueId } from "../helpers/generateUniqueId";
import { generateTimeStamp } from "../helpers/generateTimeStamp";
import { NOTE_PREFIX } from "../constants/editor";
import { useNavigate } from "react-router-dom";

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

  const addToEditor = (type, content) => {
    let newContent = {
      type,
      content,
    };
    setEditor((editor) => {
      return { ...editor, [Object.keys(editor)?.length + 1]: newContent };
    });
  };

  const setEditorState = (content) => {
    setEditor(content);
  };

  const deleteFromEditor = (contentId) => {
    const updatedEditorContent = { ...editor };
    delete updatedEditorContent[contentId];

    setEditor(updatedEditorContent);
  };

  const saveContent = () => {
    console.log(editor);
    return new Promise((resolve, reject) => {
      const uniqueID = generateUniqueId();
      localStorage.setItem(
        NOTE_PREFIX + uniqueID,
        JSON.stringify({
          title,
          id: uniqueID,
          timeStamp: generateTimeStamp(),
          editor,
        })
      );

      return resolve();
    });
  };

  const resetEditorState = () => {
    setEditor({});
  };

  return (
    <EditorContext.Provider
      value={{
        editor,
        canSave,
        title,
        resetEditorState,
        setEditorState,
        handleCanSave,
        handleTitleChange,
        saveContent,
        addToEditor,
        deleteFromEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
