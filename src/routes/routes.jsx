import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Notes from "../pages/notes/Notes"
import Editor from "../pages/editor/Editor"

const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Notes />,
        },
        {
          path: "/editor",
          element: <Editor />,
        },
      ],
    },
  ]);
  
  export default routers;