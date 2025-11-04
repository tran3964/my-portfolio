import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="nx-bg-circuit min-h-screen">
      <div  className="nx-scan" style={{ ['--nx-scan-speed']: '8s' }}>
        <Navbar />
        <main className="relative z-10 nx-corner-glow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
