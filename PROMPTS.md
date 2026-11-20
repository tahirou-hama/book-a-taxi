# Generative AI prompt log

Prompts I used with ChatGPT for each action, plus how I refined the output.

## 1. Folder structure + homepage
**Prompt:** "Act as a senior front-end developer. Create a React (Vite) folder structure for a taxi booking website called Book_A_Taxi with pages, components, data and utils folders. Then write the Home page component with a hero section, a 'Book a Ride' call-to-action, three service cards and a 'why choose us' section."
**Refinement:** Asked it to move the service list into `data/services.js` so Home and Services reuse it, and to add accessible labels.

## 2. Additional pages
**Prompt:** "Using the same design style and React Router, write About Us, Services and Contact pages for Book_A_Taxi. Reuse the same CSS classes so all pages look consistent. The Contact page needs a form with name, email and message."
**Refinement:** Asked for each service card to link to the booking page with a `?service=` query parameter.

## 3. Navigation
**Prompt:** "Create a responsive Navbar and Footer using NavLink with links to Home, About Us, Services, Contact and Book a Ride. Highlight the active page and add a mobile menu toggle. Wrap all routes in a shared Layout so every page has the same menu."

## 4. Booking page
**Prompt:** "Create a Booking page in React with fields: full name, email, phone, pickup, drop-off, service type (dropdown), date, time and passengers. Pre-select the service from the URL query string. Show a confirmation summary after submit."

## 5. Form validation
**Prompt:** "Add basic form validation to the booking form without external libraries. Rules: required fields, valid email, phone 8–15 digits, pickup and drop-off must differ, date not in the past, time not already passed today, passengers 1–6. Show inline error messages, mark invalid inputs with aria-invalid, and focus the first invalid field on submit. Put the validators in utils/validation.js."
**Refinement:** Asked it to validate on blur and re-validate live only after an error appeared, to avoid errors showing while typing.

## Review notes
I read through the generated code, removed unused imports, fixed the time check for same-day bookings, and tested every link and validation rule manually.
