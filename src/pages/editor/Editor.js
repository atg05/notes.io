import React from "react";

const Editor = () => {
  return (
    <div className="editor_container">
      <input
        type="text"
        placeholder="Title"
        className="title_input"
        // onChange={(e) => _handleTitleChange(e)}
      />
    </div>
  );
};

export default Editor;
