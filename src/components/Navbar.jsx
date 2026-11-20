import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <a href="#main" className="skip">Skip to content</a>
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={close}>Book_A_Taxi</Link>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav className={open ? "links open" : "links"} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close}>{l.label}</NavLink>
          ))}
          <NavLink to="/booking" className="btn btn-small" onClick={close}>Book a Ride</NavLink>
        </nav>
      </div>
      <div className="checker" aria-hidden="true" />
    </header>
  );
}
