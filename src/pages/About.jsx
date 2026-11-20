import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="wrap section narrow">
      <h1>About Book_A_Taxi</h1>
      <p className="lead">We started with a simple idea: getting a taxi should take a minute, not a phone tree.</p>
      <p>Book_A_Taxi connects riders with licensed local drivers. We keep fares clear, vehicles clean and pickups on time, so you can focus on where you are going.</p>
      <h2>What we stand for</h2>
      <ul className="why">
        <li><b>Safety first.</b> Drivers are verified and vehicles are inspected.</li>
        <li><b>Honest pricing.</b> No surprise charges at the end of the trip.</li>
        <li><b>Respect for time.</b> We track punctuality and act on delays.</li>
      </ul>
      <Link to="/booking" className="btn">Book a Ride</Link>
    </section>
  );
}
