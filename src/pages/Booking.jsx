import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Field from "../components/Field.jsx";
import { services } from "../data/services.js";
import { validateBooking } from "../utils/validation.js";

const empty = { name: "", email: "", phone: "", pickup: "", dropoff: "", service: "", date: "", time: "", passengers: 1 };
const todayStr = () => new Date().toISOString().split("T")[0];

export default function Booking() {
  const [params] = useSearchParams();
  const preset = services.some((s) => s.id === params.get("service")) ? params.get("service") : "";
  const [values, setValues] = useState({ ...empty, service: preset });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

  const change = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-validate live only for fields that already show an error.
    if (errors[name]) setErrors({ ...errors, [name]: validateBooking(next)[name] });
  };
  const blur = (e) => setErrors({ ...errors, [e.target.name]: validateBooking(values)[e.target.name] });

  const submit = (e) => {
    e.preventDefault();
    const found = validateBooking(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(values);
    else document.querySelector(".has-error input, .has-error select")?.focus();
  };

  if (done) {
    const svc = services.find((s) => s.id === done.service)?.name;
    return (
      <section className="wrap section narrow">
        <div className="success" role="status">
          <h1>Ride booked, {done.name.trim().split(" ")[0]}.</h1>
          <p>{svc} from <b>{done.pickup}</b> to <b>{done.dropoff}</b> on {done.date} at {done.time} for {done.passengers} passenger(s).</p>
          <p>A confirmation will be sent to {done.email}.</p>
          <div className="row">
            <button className="btn" onClick={() => { setDone(null); setValues({ ...empty }); setErrors({}); }}>Book another ride</button>
            <Link className="btn btn-ghost" to="/">Back to home</Link>
          </div>
        </div>
      </section>
    );
  }

  const f = (id, label, props = {}) => (
    <Field id={id} label={label} error={errors[id]}>
      <input id={id} name={id} value={values[id]} onChange={change} onBlur={blur}
        aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} {...props} />
    </Field>
  );

  return (
    <section className="wrap section narrow">
      <h1>Book a ride</h1>
      <p className="lead">Fill in the details and we will confirm your driver.</p>
      <form onSubmit={submit} noValidate className="form">
        {f("name", "Full name", { autoComplete: "name" })}
        <div className="two">
          {f("email", "Email", { type: "email", autoComplete: "email" })}
          {f("phone", "Phone", { type: "tel", autoComplete: "tel" })}
        </div>
        <div className="two">
          {f("pickup", "Pickup location")}
          {f("dropoff", "Drop-off location")}
        </div>
        <Field id="service" label="Service" error={errors.service}>
          <select id="service" name="service" value={values.service} onChange={change} onBlur={blur} aria-invalid={!!errors.service}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </Field>
        <div className="three">
          {f("date", "Date", { type: "date", min: todayStr() })}
          {f("time", "Time", { type: "time" })}
          {f("passengers", "Passengers", { type: "number", min: 1, max: 6 })}
        </div>
        <button className="btn" type="submit">Confirm booking</button>
      </form>
    </section>
  );
}
