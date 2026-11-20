// Basic, dependency-free validators. Each returns an object of field -> error message.
const today = () => new Date().toISOString().split("T")[0];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBooking(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  else if (v.name.trim().length < 2) e.name = "Name must be at least 2 characters.";

  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!emailRe.test(v.email)) e.email = "Enter a valid email, like name@example.com.";

  const digits = v.phone.replace(/[\s()+-]/g, "");
  if (!v.phone.trim()) e.phone = "Enter your phone number.";
  else if (!/^\d{8,15}$/.test(digits)) e.phone = "Phone must have 8 to 15 digits.";

  if (!v.pickup.trim()) e.pickup = "Enter a pickup location.";
  if (!v.dropoff.trim()) e.dropoff = "Enter a drop-off location.";
  else if (v.pickup.trim().toLowerCase() === v.dropoff.trim().toLowerCase())
    e.dropoff = "Drop-off must differ from pickup.";

  if (!v.service) e.service = "Select a service.";

  if (!v.date) e.date = "Choose a pickup date.";
  else if (v.date < today()) e.date = "Pickup date cannot be in the past.";

  if (!v.time) e.time = "Choose a pickup time.";
  else if (v.date === today()) {
    const now = new Date();
    const [h, m] = v.time.split(":").map(Number);
    if (h * 60 + m < now.getHours() * 60 + now.getMinutes()) e.time = "Pickup time has already passed today.";
  }

  const p = Number(v.passengers);
  if (!Number.isInteger(p) || p < 1 || p > 6) e.passengers = "Passengers must be between 1 and 6.";
  return e;
}

export function validateContact(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!emailRe.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.message.trim()) e.message = "Write a short message.";
  else if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
}
