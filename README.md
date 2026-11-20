# Book_A_Taxi – Front-end Starter (React + Vite)

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Folder structure
```
book-a-taxi/
├─ index.html
├─ package.json / vite.config.js
└─ src/
   ├─ main.jsx            entry, BrowserRouter
   ├─ App.jsx             routes + shared Layout (Navbar, Footer)
   ├─ styles.css          design tokens + all styling
   ├─ components/         Navbar, Footer, Field
   ├─ pages/              Home, About, Services, Contact, Booking
   ├─ data/services.js    single source for service list
   └─ utils/validation.js booking + contact validators
```

## Routes
`/` Home · `/about` · `/services` · `/contact` · `/booking` (also `/booking?service=airport` pre-selects a service)

## Booking validation rules
Name (required, 2+ chars) · Email (required, format) · Phone (8–15 digits) · Pickup and drop-off (required, must differ) · Service (required) · Date (not in the past) · Time (not already passed today) · Passengers (1–6). Errors show inline on blur/submit and focus moves to the first invalid field.

## AI prompts used (ChatGPT) – see PROMPTS.md
