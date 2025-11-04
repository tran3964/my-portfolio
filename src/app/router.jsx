import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import SkillsCert from "../pages/SkillsCert";
import Contact from "../pages/Contact";

const isProd = import.meta.env.MODE === "production";
const baseName = isProd ? "/my-portfolio" : "";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <SkillsCert /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", loader: () => redirect("/") },
  ],
  { basename: baseName }
);

export default router;