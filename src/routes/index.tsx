import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Skills from "../pages/skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);
