import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/game",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>Game</div>,
      },
      {
        path: "box",
        element: <div>Box</div>,
      },
      {
        path: "grave",
        element: <div>Grave</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
