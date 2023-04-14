import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";

import Home from "../pages/Home";
import DetailMember from "../pages/DetailMember";
import ListMember from "../pages/ListMember";
import ExportExcel from "../pages/ExportExcel";

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
    {
      path: "/ExportExcel",
      element: <ExportExcel />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
