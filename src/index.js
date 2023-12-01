import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Notes /> */}
    <Layout />
  </React.StrictMode>
);
