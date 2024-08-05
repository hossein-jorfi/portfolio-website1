import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Skills from "../pages/skills";
import About from "../pages/about";
import Experience from "../pages/experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
]);
