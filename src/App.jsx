import { useState } from "react";

import { PHONED_IN } from "./data/tonight.js";
import BookingForm from "./components/BookingForm.jsx";
import BookingList from "./components/BookingList.jsx";

function App() {
  const [bookings, setBookings] = useState(PHONED_IN);

  function addBooking(booking) {
    setBookings([...bookings, booking]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Corner Table</h1>
        <p className="header-sub">Reservations for tonight</p>
      </header>
      <main className="workspace">
        <BookingForm onBook={addBooking} />
        <BookingList bookings={bookings} />
      </main>
    </div>
  );
}

export default App;
