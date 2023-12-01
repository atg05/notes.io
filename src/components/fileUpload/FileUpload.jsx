import React, { useContext } from "react";
import { generateUniqueId } from "../../helpers/generateUniqueId";
import { EditorContext } from "../../context/EditorContext";
import { Text } from "../../constants/editor";

const FileUpload = ({ fileType, icon }) => {
  const { editor, addToEditor } = useContext(EditorContext);

  const handleFileUpload = (event) => {
    const input = event.target;
    const file = input.files && input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = e.target?.result;
        addToEditor(fileType, fileData);
      };

      addToEditor(Text, ""); // Adding another text box after every media content is added

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor={`${fileType}Input`}>{icon}</label>
      <input
        type="file"
        id={`${fileType}Input`}
        accept={`${fileType}/*`}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
