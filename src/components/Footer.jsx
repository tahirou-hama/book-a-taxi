import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <strong>Book_A_Taxi</strong>
          <p>Reliable rides, fixed fares, one tap to book.</p>
        </div>
        <nav aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking">Book a Ride</Link>
        </nav>
      </div>
      <p className="copy">© {new Date().getFullYear()} Book_A_Taxi</p>
    </footer>
  );
}
