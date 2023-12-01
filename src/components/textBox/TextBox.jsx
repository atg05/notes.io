import { EditorContext } from "../../context/EditorContext";

const TextBox = (props) => {
  console.log(props);
  const [textData, setTextData] = useState({ type: "text", data: "" });
  const [textBoxId, setTextBoxId] = useState(generateUniqueId());

  const {
    editor,
    addToEditor,
    deleteFromEditor,
    handleCanSave,
    handleTitleChange,
  } = useContext(EditorContext);

  function resizeTextArea() {
    const textarea = document.getElementById("TextArea");
    textarea.style.height = "auto"; // Reset the height to auto to get the scroll height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
  }
  const handleChange = (e: any) => {
    addToEditor(textBoxId, "text", e.target.value);
    resizeTextArea();
  };

  return (
    <textarea
      placeholder="Start typing..."
      defaultValue={props.defaultValue}
      onChange={handleChange}
      id="TextArea"
    />
  );
};

export default TextBox;
