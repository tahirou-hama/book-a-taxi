import { Link } from "react-router-dom";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section className="wrap section">
      <h1>Our services</h1>
      <p className="lead">Choose a service and we will pre-fill your booking.</p>
      <div className="grid">
        {services.map((s) => (
          <article className="card" key={s.id}>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
            <Link to={`/booking?service=${s.id}`}>Book this ride</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
