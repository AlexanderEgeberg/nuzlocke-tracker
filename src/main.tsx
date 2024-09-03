import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import App from "./App";
import Game from "./routes/Game";
import Box from "./routes/Box";
import Grave from "./routes/Grave";

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
        element: <Game />,
      },
      {
        path: "box",
        element: <Box />,
      },
      {
        path: "grave",
        element: <Grave />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
