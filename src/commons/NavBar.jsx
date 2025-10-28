import { NavLink } from "react-router-dom";

const link = 'px-3 py-2 rounded-lg hover:bg-zinc-800';
const active = "bg-zinc-800";

export default function NavBar(){
    return(
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-2">
        <div className="font-semibold mr-4">Nguyen Tran</div>
        <NavLink to="/" className={({isActive})=>`${link} ${isActive?active:""}`}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>`${link} ${isActive?active:""}`}>About</NavLink>
        <NavLink to="/projects" className={({isActive})=>`${link} ${isActive?active:""}`}>Projects</NavLink>
        <NavLink to="/skills" className={({isActive})=>`${link} ${isActive?active:""}`}>Skills & Certs</NavLink>
        <NavLink to="/contact" className={({isActive})=>`${link} ${isActive?active:""}`}>Contact</NavLink>
      </nav>
    </header>
    )
}