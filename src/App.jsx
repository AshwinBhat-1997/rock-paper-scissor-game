import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Achievements from "./pages/Achievements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
