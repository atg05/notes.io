import { useContext, useEffect, useRef, useState } from "react";
import { EditorContext } from "../../context/EditorContext";
import { generateUniqueId } from "../../helpers/generateUniqueId";
import { Text } from "../../constants/editor";

const TextBox = (props) => {
  const [textData, setTextData] = useState("");
  const [textBoxId, setTextBoxId] = useState(generateUniqueId());

  const [isEdit, setIsEdit] = useState(false);

  const {
    editor,
    addToEditor,
    deleteFromEditor,
    handleCanSave,
    handleTitleChange,
  } = useContext(EditorContext);

  function resizeTextArea() {
    const textarea = document.getElementById(textBoxId);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  const _textInputElement = useRef();
  const [resetTimer, setResetTimer] = useState();
  const [signal, setSignal] = useState(true);

  const handleChange = (e) => {
    setResetTimer((state) => !state);
    resizeTextArea();
  };

  useEffect(() => {
    resizeTextArea();
  }, []);

  useEffect(() => {
    console.log(_textInputElement.current.value);
    let countDown = setTimeout(() => {
      if (_textInputElement.current?.value) {
        // addToEditor(textBoxId, Text, _textInputElement.current.value);
        addToEditor(Text, _textInputElement.current.value);
      } else {
        deleteFromEditor(textBoxId);
      }
    }, 1500);

    return () => {
      clearTimeout(countDown);
    };
  }, [resetTimer]);

  return (
    <textarea
      placeholder="Start typing..."
      defaultValue={props.defaultValue}
      onChange={handleChange}
      ref={_textInputElement}
      id={textBoxId}
      style={{ margin: "0" }}
    />
  );
};

export default TextBox;
