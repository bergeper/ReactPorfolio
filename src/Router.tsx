import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/pages/Layout/Layout";
import { Project } from "./components/pages/Project/Project";
import { Projects } from "./components/pages/Projects/Projects";
import { About } from "./components/pages/About/About";
import { Contact } from "./components/pages/Contact/Contact";
import { Hero } from "./components/pages/Hero/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
        index: true,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects/:id",
        element: <Project></Project>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
