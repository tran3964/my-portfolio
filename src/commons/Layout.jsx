import NavBar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
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
