"use client";

import { useEffect, useState } from "react";

export default function CalendarPage() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FNew_York&title=Girls%20Who%20Code%20Event%20Calendar%20%E2%8B%86%E2%80%A7%C2%B0%F0%93%8F%B2%D6%BC%F0%9D%84%A2&src=Z3djdWNmZGV2QGdtYWlsLmNvbQ&src=ZDA1YWI3MTM3MTlkZmQzZWE2MzBlOTUzZDgxM2U2ZTY0ODdkZmNlYjI1ZjRlYTgxOWE1ZmJhNTE5ODZlNjA5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb&color=%23039be5&color=%23b39ddb"
        style={{ border: 0 }}
        width="700"
        height="500"
      />
    </div>
  );
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/api/calendar")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.items || []);
      });
  }, []);

  return (
    <div>
      <h1>Calendar</h1>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event: any) => (
            <li key={event.id}>
              {event.summary} –{" "}
              {event.start?.dateTime || event.start?.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}