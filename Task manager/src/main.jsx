import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>404 Not Found!</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
