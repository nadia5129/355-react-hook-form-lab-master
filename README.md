# Corner Table

The starter project for the SDEV 355 lab on React Hook Form.

A restaurant's booking page. The form on the left books a table, and the list
on the right shows tonight's bookings. At the start the form keeps every field
in `useState`; in the lab you move it to React Hook Form.

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

## What is where

| file | what it does |
|---|---|
| `src/components/BookingForm.jsx` | the booking form, the file you change in the lab |
| `src/components/BookingList.jsx` | tonight's bookings, and the number of guests |
| `src/components/RenderBadge.jsx` | the badge beside the form's heading, which counts how many times the form has rendered |
| `src/data/tonight.js` | the times, the seating areas and the two bookings taken by phone |
| `src/App.jsx` | holds the list of bookings and lays out the page |

## The finished version

The `solution` branch holds the app as it is at the end of the lab:

```bash
git checkout solution
```
