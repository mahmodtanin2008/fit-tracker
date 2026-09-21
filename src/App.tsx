import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home";
import Activity from "./components/Activity";
import Food from "./components/Food";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Porofile from "./components/porofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Activity",
    element: <Activity />,
  },
  {
    path: "/Food",
    element: <Food />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Porofile",
    element: <Porofile />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
