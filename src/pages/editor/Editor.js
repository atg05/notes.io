import { useContext, useEffect, useRef, useState } from "react";
import { EditorContext } from "../../context/EditorContext";
import { ReactComponent as DeleteIcon } from "../../assets/Delete_Icon.svg";
import "./editor.style.css";
import Toolbar from "../../components/toolbar/Toolbar";
import TextBox from "../../components/textBox/TextBox";
import { Audio, NOTE_PREFIX, Text, Video } from "../../constants/editor";
import { useLocation } from "react-router-dom";
import { NotesContext } from "../../context/NotesContext";

const Editor = () => {
  const {
    editor,
    addToEditor,
    setEditorState,
    deleteFromEditor,
    handleCanSave,
    handleTitleChange,
    resetEditorState,
  } = useContext(EditorContext);

  const location = useLocation();

  const queryParms = new URLSearchParams(location.search);
  const mode = queryParms.get("mode");
  const id = queryParms.get("id");

  const { allNotes } = useContext(NotesContext);
  const [notes, setNotes] = useState();
  const _titleElement = useRef();

  function fetchNoteInfo() {
    const noteNewContent = localStorage.getItem(NOTE_PREFIX + id);
    const _parsedNewContent = JSON.parse(noteNewContent);

    setNotes(JSON.parse(noteNewContent));
    setEditorState(_parsedNewContent.editor);
  }
  console.log(editor);

  const _handleTitleChange = (e) => {
    if (e.target.value !== "") {
      handleTitleChange(e.target.value);
      handleCanSave(true);
    } else {
      handleCanSave(false);
    }
  };

  useEffect(() => {
    if (id) fetchNoteInfo();

    return () => {
      resetEditorState();
    };
  }, [id]);

  console.log(notes);

  return (
    <div className="editor_container">
      <input
        type="text"
        placeholder="Title"
        className="title_input"
        onChange={(e) => _handleTitleChange(e)}
        defaultValue={notes?.title}
      />

      <div className="action_container">
        {Object.keys(editor).length === 0 ? (
          <TextBox />
        ) : (
          Object.keys(editor)?.map((key) => {
            const { ...data } = editor[key];
            switch (data.type) {
              case Text:
                return (
                  <TextBox key={data.id} defaultValue={data.content || ""} />
                );

              case Audio:
                return (
                  <audio key={data.id} controls className="audio_player">
                    <source src={data.content} type="audio/mp3" />
                    Your browser does not support the audio tag.
                  </audio>
                );
              case Video:
                return (
                  <div key={data.id} className="player_container">
                    <DeleteIcon
                      className="delete_icon"
                      onClick={() => {
                        deleteFromEditor(key);
                      }}
                    />
                    <video controls width="300" className="video_player">
                      <source src={data.content} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              case "Image":
                return (
                  <div key={data.id} className="player_container">
                    <DeleteIcon
                      className="delete_icon"
                      onClick={() => {
                        deleteFromEditor(key);
                      }}
                    />
                    <img src={data.content} className="image_player" />
                  </div>
                );
              default:
                return null;
            }
          })
        )}
      </div>

      <Toolbar />
    </div>
  );
};

export default Editor;
