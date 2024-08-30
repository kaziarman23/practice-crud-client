import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Layout/Root.jsx";
import Members from "./Components/Pages/Members/Members.jsx";
import AddMembers from "./Components/Pages/AddMembers/AddMembers.jsx";
import Update from "./Components/Pages/Update/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/members",
        element: <Members />,
        loader: () => fetch("http://localhost:5000/members"),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/members/${params.id}`),
      },
      {
        path: "/add-members",
        element: <AddMembers />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
