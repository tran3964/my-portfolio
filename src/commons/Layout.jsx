import { useEffect } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { attachTypewriter } from "../utils/typewriter"; 

export default function Layout({ children }) {
  useEffect(() => {
    // Initialize typewriter after each render of children
    attachTypewriter("[data-ty]", {
      speed: 26,
      cursorChar: "▌",
    });
  }, [children]); 
  return (
    <div className="nx-bg-circuit layout">
        <header className="site-header">
          <NavBar />
        </header>

        <main className="site-main">
          {children}
        </main>

        <footer className="site-footer">
          <Footer />
        </footer>
    </div>
  );
}
