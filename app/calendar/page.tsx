"use client";

import { useEffect, useState } from "react";
import Script from 'next/script'

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff_0%,#eef4fc_12.5%,#BCD1ED_25%,#eef4fc_37.5%,#ffffff_50%,#eef4fc_62.5%,#BCD1ED_75%,#eef4fc_87.5%,#ffffff_100%)] py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gwc-darkblue mb-4 mt-8 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
            monthly calendar
          </h1>
        </div>

        {/* calendar */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '10%' }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FNew_York&title=Girls%20Who%20Code%20Event%20Calendar%20%E2%8B%86%E2%80%A7%C2%B0%F0%93%8F%B2%D6%BC%F0%9D%84%A2&src=Z3djdWNmZGV2QGdtYWlsLmNvbQ&src=ZDA1YWI3MTM3MTlkZmQzZWE2MzBlOTUzZDgxM2U2ZTY0ODdkZmNlYjI1ZjRlYTgxOWE1ZmJhNTE5ODZlNjA5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb&color=%23039be5&color=%23b39ddb"
            style={{ border: 0, width: '100%', maxWidth: '800px' }}
            height="600"
          />
        </div>
      
        {/* instagram post */}
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DXHOzcBDozD/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{ maxWidth: '500px', width: '100%' }}
          />
        </div>

      </div>
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