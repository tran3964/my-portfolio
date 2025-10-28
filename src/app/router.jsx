import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import SkillsCert from "../pages/SkillsCert";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
    { path:"/", element:<Home/>},
    { path:"/about", element: <About/>},
    { path:"/projects", element: <Projects/>},
    { path:"/skills", elemment: <SkillsCert/>},
    { path:"/contact", element: <Contact/>}
]);

export default router;