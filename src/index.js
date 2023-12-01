import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routes";
import "./styles/index.css";
import EditorProvider from "./context/EditorContext.jsx";
import NotesProvider from "./context/NotesContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EditorProvider>
      <NotesProvider>
        <RouterProvider router={routers} />
      </NotesProvider>
    </EditorProvider>
  </React.StrictMode>
);
