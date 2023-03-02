import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import React from "react";
import axios from "axios";
import Home from "../pages/Home";
import DetailMember from "../pages/DetailMember";
import ListMember from "../pages/ListMember";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/DetailMember",
      element: <DetailMember />,
    },
    {
      path: "/ListMember",
      element: <ListMember />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
