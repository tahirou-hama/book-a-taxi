import { useState } from "react";
import Field from "../components/Field.jsx";
import { validateContact } from "../utils/validation.js";

export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setV({ ...v, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const found = validateContact(v);
    setErrors(found);
    if (!Object.keys(found).length) { setSent(true); setV({ name: "", email: "", message: "" }); }
    else setSent(false);
  };

  return (
    <section className="wrap section narrow">
      <h1>Contact us</h1>
      <p className="lead">Questions about a booking or a fare? We reply within one business day.</p>
      <p>Phone: +227 00 00 00 00 · Email: support@bookataxi.example</p>
      {sent && <p className="success" role="status">Message sent. Thank you, we will be in touch.</p>}
      <form onSubmit={submit} noValidate className="form">
        <Field id="c-name" label="Name" error={errors.name}>
          <input id="c-name" name="name" value={v.name} onChange={change} />
        </Field>
        <Field id="c-email" label="Email" error={errors.email}>
          <input id="c-email" name="email" type="email" value={v.email} onChange={change} />
        </Field>
        <Field id="c-message" label="Message" error={errors.message}>
          <textarea id="c-message" name="message" rows="5" value={v.message} onChange={change} />
        </Field>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
