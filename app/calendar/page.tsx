"use client";

import { useEffect, useState } from "react";

export default function CalendarPage() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&mode=MONTH&showPrint=0&showTitle=0&src=Z3djdWNmZGV2QGdtYWlsLmNvbQ&src=ZDA1YWI3MTM3MTlkZmQzZWE2MzBlOTUzZDgxM2U2ZTY0ODdkZmNlYjI1ZjRlYTgxOWE1ZmJhNTE5ODZlNjA5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%239e69af&color=%230b8043"
        style={{ border: 0 }}
        width="800"
        height="600"
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