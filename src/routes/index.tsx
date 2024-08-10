import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Skills from "../pages/skills";
import About from "../pages/about";
import Experience from "../pages/experience";
import MainLayout from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
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
    ],
  },
]);
