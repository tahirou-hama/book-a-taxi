import { Link } from "react-router-dom";
import { services } from "../data/services.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Your taxi is closer than you think.</h1>
            <p className="lead">Tell us where you are and where you are going. We send a verified driver with the fare agreed up front.</p>
            <div className="row">
              <Link to="/booking" className="btn">Book a Ride</Link>
              <Link to="/services" className="btn btn-ghost">See services</Link>
            </div>
          </div>
          <div className="meter" aria-label="Sample fare">
            <span>Estimated fare</span>
            <b>Fixed</b>
            <small>Pickup in about 5 minutes</small>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <h2>Pick the ride that fits your day</h2>
        <div className="grid">
          {services.slice(0, 3).map((s) => (
            <article className="card" key={s.id}>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <Link to={`/booking?service=${s.id}`}>Book this ride</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Why riders stay with us</h2>
          <ul className="why">
            <li><b>Verified drivers.</b> Every driver is background-checked and rated.</li>
            <li><b>Fixed fares.</b> You see the price before you confirm.</li>
            <li><b>Always available.</b> Rides around the clock, every day.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
